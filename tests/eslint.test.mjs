import assert from 'node:assert/strict'
import test from 'node:test'
import { ESLint } from 'eslint'

const eslint = new ESLint()
const filePath = 'src/components/LintRegression.tsx'

test('lint accepts a valid React component', async () => {
  const [result] = await eslint.lintText(
    'export default function Example() { return <button type="button">Open</button>; }',
    { filePath },
  )

  assert.deepEqual(result.messages, [])
})

test('lint preserves React, accessibility, and import diagnostics', async () => {
  const [result] = await eslint.lintText(
    'export default () => <img src="/icon.png" />;',
    { filePath },
  )

  for (const ruleId of [
    'react/display-name',
    'jsx-a11y/alt-text',
    'import/no-anonymous-default-export',
  ]) {
    assert.ok(
      result.messages.some((message) => message.ruleId === ruleId),
      `expected ${ruleId} to report a diagnostic`,
    )
  }
})
