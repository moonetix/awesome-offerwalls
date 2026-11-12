// Turns link check results into the body of the "Broken links" issue.
// Returns null when nothing failed, so the caller can close the issue instead.
//
// Each result: { url, result: 'ok' | 'warn' | 'fail', status, files? }

import { writeFileSync, rmSync } from 'node:fs';

export function brokenLinksReport(results, { run = '(local run)', schedule = 'weekly' } = {}) {
  const failed = results.filter((r) => r.result === 'fail');
  if (!failed.length) return null;
  const warned = results.filter((r) => r.result === 'warn').length;
  const withFiles = failed.some((r) => r.files?.length);
  const rows = failed.map((r) => {
    const cells = [String(r.status).replaceAll('|', '/'), r.url];
    if (withFiles) cells.push((r.files ?? []).join(', '));
    return `| ${cells.join(' | ')} |`;
  });
  const n = failed.length;
  return [
    `The ${schedule} link check found ${n} link${n === 1 ? '' : 's'} that no longer work${n === 1 ? 's' : ''}. Each one was tried twice. Replace or remove ${n === 1 ? 'it' : 'them'}; the next clean run closes this issue.`,
    '',
    withFiles ? '| Status | Link | Found in |' : '| Status | Link |',
    withFiles ? '| --- | --- | --- |' : '| --- | --- |',
    ...rows,
    '',
    ...(warned ? [`${warned} more link${warned === 1 ? '' : 's'} answered 401, 403, 429, 999 or timed out. Those sites turn away automated clients, so they are not counted here.`, ''] : []),
    `Run: ${run}`,
  ].join('\n');
}

// Writes the report for the workflow, or removes a stale one.
export function writeReport(path, results, options) {
  const body = brokenLinksReport(results, options);
  if (body) writeFileSync(path, body + '\n');
  else rmSync(path, { force: true });
  return body;
}
