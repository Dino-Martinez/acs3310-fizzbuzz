const fb = require('../fizzbuzz')

test('Sanity Check', ()=>{
  expect(2+2).toBe(4)
})

test('isFizzy', () => {
  expect(fb.isFizzy(1)).toBe(false)
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(0)).toBe(true)
  expect(fb.isFizzy(-1)).toBe(false)
  expect(fb.isFizzy(-3)).toBe(true)
  expect(fb.isFizzy(30)).toBe(true)
})

test ('isBuzzy', () => {
  expect(fb.isBuzzy(1)).toBe(false)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(0)).toBe(true)
  expect(fb.isBuzzy(-1)).toBe(false)
  expect(fb.isBuzzy(-5)).toBe(true)
  expect(fb.isBuzzy(30)).toBe(true)
})

test ('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(1)).toBe('')
  expect(fb.fizzyBuzzy(5)).toBe('BUZZ')
  expect(fb.fizzyBuzzy(0)).toBe('FIZZBUZZ')
  expect(fb.fizzyBuzzy(-1)).toBe('')
  expect(fb.fizzyBuzzy(-5)).toBe('BUZZ')
  expect(fb.fizzyBuzzy(30)).toBe('FIZZBUZZ')
  expect(fb.fizzyBuzzy(3)).toBe('FIZZ')
  expect(fb.fizzyBuzzy(-3)).toBe('FIZZ')
})