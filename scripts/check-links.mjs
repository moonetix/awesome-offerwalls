#!/usr/bin/env node
// Checks every http(s) link in a Markdown file, one request per second.
// Node 22, no dependencies.
//
//   node scripts/check-links.mjs [README.md] [--delay=1000]
//
// ok    2xx, directly or after redirects
// warn  401, 403, 429, 999 or a timeout: the site turns away automated clients
// fail  anything else: 404, 410, 5xx, DNS errors, refused connections, redirect loops
//
// Exits with 1 when a link fails. Warnings are listed but do not fail the run:
// some official sites (minecraft.net, discord.com) block or silently drop requests
// from datacenter IPs, including GitHub's runners. A removed page still fails.

import { appendFile, readFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--')) ?? 'README.md';
const delayArg = args.find((a) => a.startsWith('--delay='));
const delayMs = delayArg ? Number(delayArg.slice(8)) : 1000;

const USER_AGENT = 'Mozilla/5.0 (compatible; awesome-offerwalls-link-check; +https://github.com/moonetix/awesome-offerwalls)';
const TIMEOUT_MS = 20000;
const MAX_REDIRECTS = 8;
const WARN = new Set([401, 403, 429, 999]);
// The CI badge links point back at this repository's own workflow runs.
const SELF = 'https://github.com/moonetix/awesome-offerwalls/actions/';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let lastRequest = 0;
async function get(url) {
  const wait = lastRequest + delayMs - Date.now();
  if (wait > 0) await sleep(wait);
  lastRequest = Date.now();
  const res = await fetch(url, {
    redirect: 'manual',
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: {
      'user-agent': USER_AGENT,
      accept: 'text/html,application/xhtml+xml,*/*;q=0.8',
      'accept-language': 'en-US,en;q=0.8',
    },
  });
  // Only the status matters, so skip the body.
  await res.body?.cancel().catch(() => {});
  return res;
}

async function check(url) {
  const chain = [];
  let current = url;
  try {
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      const res = await get(current);
      chain.push(res.status);
      const location = res.headers.get('location');
      if (res.status >= 300 && res.status < 400 && location) {
        current = new URL(location, current).href;
        continue;
      }
      const result = res.status < 300 ? 'ok' : WARN.has(res.status) ? 'warn' : 'fail';
      return { result, status: String(res.status), chain };
    }
    return { result: 'fail', status: 'too many redirects', chain };
  } catch (err) {
    if (err.name === 'TimeoutError') return { result: 'warn', status: 'timeout', chain };
    return { result: 'fail', status: err.cause?.code ?? err.message, chain };
  }
}

function links(markdown) {
  const found = new Set();
  for (const m of markdown.matchAll(/\]\((https?:\/\/[^)\s]+)\)|<(https?:\/\/[^>\s]+)>/g)) {
    found.add(m[1] ?? m[2]);
  }
  return [...found];
}

const urls = links(await readFile(file, 'utf8')).filter((u) => !u.startsWith(SELF));
const results = [];
for (const url of urls) {
  let r = await check(url);
  if (r.result === 'fail') {
    // One retry after a pause, for short network or server hiccups.
    await sleep(5000);
    r = await check(url);
  }
  results.push({ url, ...r });
  const via = r.chain.length > 1 ? ` (${r.chain.join(' > ')})` : '';
  console.log(`${r.result.padEnd(4)}  ${r.status}  ${url}${via}`);
}

const of = (kind) => results.filter((r) => r.result === kind);
console.log(`\n${urls.length} links: ${of('ok').length} ok, ${of('warn').length} warn, ${of('fail').length} fail`);

if (process.env.GITHUB_STEP_SUMMARY) {
  const rows = [...of('fail'), ...of('warn')].map((r) => `| ${r.result} | ${r.status} | ${r.url} |`);
  const table = rows.length ? ['| Result | Status | Link |', '| --- | --- | --- |', ...rows].join('\n') : 'All links answered 2xx.';
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `## Link check\n\n${urls.length} links checked.\n\n${table}\n`);
}

process.exit(of('fail').length ? 1 : 0);
