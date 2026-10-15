import { test, expect } from 'vitest'
import { page, userEvent } from 'vitest/browser'

test('click', async () => {
  document.body.innerHTML = '<button id="b">hi</button>'
  await userEvent.click(page.getByRole('button'))
  expect(1).toBe(1)
})
