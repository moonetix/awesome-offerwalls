import { test } from 'node:test';
import assert from 'node:assert/strict';
import { brokenLinksReport } from './link-report.mjs';

test('no failures, no report', () => {
  assert.equal(brokenLinksReport([{ url: 'https://a.example', result: 'ok', status: 200 }, { url: 'https://b.example', result: 'warn', status: 403 }]), null);
});

test('lists only failed links, and counts refused ones separately', () => {
  const body = brokenLinksReport([
    { url: 'https://a.example/gone', result: 'fail', status: 404 },
    { url: 'https://b.example', result: 'warn', status: 403 },
    { url: 'https://c.example', result: 'fail', status: 'ENOTFOUND' },
    { url: 'https://d.example', result: 'ok', status: 200 },
  ], { run: 'https://github.com/o/r/actions/runs/1' });
  assert.match(body, /found 2 links that no longer work\./);
  assert.match(body, /\| 404 \| https:\/\/a\.example\/gone \|/);
  assert.match(body, /\| ENOTFOUND \| https:\/\/c\.example \|/);
  assert.doesNotMatch(body, /b\.example|d\.example/);
  assert.match(body, /1 more link answered 401/);
  assert.match(body, /Run: https:\/\/github\.com\/o\/r\/actions\/runs\/1/);
});

test('names the files a broken link appears in when the check covers several', () => {
  const body = brokenLinksReport([{ url: 'https://a.example', result: 'fail', status: 410, files: ['README.md', 'chapters/03.md'] }]);
  assert.match(body, /\| Status \| Link \| Found in \|/);
  assert.match(body, /\| 410 \| https:\/\/a\.example \| README\.md, chapters\/03\.md \|/);
  assert.match(body, /found 1 link that no longer works\./);
});
