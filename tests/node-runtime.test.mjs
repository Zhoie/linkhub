import assert from 'node:assert/strict';
import test from 'node:test';
import { isSupportedNode } from '../scripts/check-node-version.mjs';

test('rejects vulnerable and unsupported Node.js runtimes', () => {
  for (const version of ['22.23.3', 'v22.22.0', '20.20.1', '24.22.1', 'invalid']) {
    assert.equal(isSupportedNode(version), false, version);
  }
});

test('accepts the patched baseline and later Node.js 22 releases', () => {
  for (const version of ['22.23.4', 'v22.23.5', '22.24.0']) {
    assert.equal(isSupportedNode(version), true, version);
  }
});
