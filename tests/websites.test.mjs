import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const source = await readFile(
  new URL('../src/pages/api/websites.json', import.meta.url),
  'utf8',
)
const categories = JSON.parse(source)

test('website catalog contains valid categories and links', () => {
  assert.ok(Object.keys(categories).length > 0)

  const seenUrls = new Set()
  for (const [category, websites] of Object.entries(categories)) {
    assert.equal(category, category.trim())
    assert.ok(Array.isArray(websites) && websites.length > 0)

    for (const website of websites) {
      assert.equal(typeof website.name, 'string')
      assert.equal(website.name, website.name.trim())
      assert.ok(website.name.length > 0)
      assert.equal(typeof website.description, 'string')
      assert.equal(typeof website.icon, 'string')
      assert.equal(website.url, website.url.trim())

      const url = new URL(website.url)
      assert.equal(url.protocol, 'https:')
      assert.ok(!seenUrls.has(url.href), `duplicate URL: ${url.href}`)
      seenUrls.add(url.href)
    }
  }
})
