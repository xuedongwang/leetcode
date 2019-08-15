const index = require('./index');

test('palindromeNumber("0") return true', () => {
  expect(index(0)).toBe(true);
});

test('palindromeNumber("1") return true', () => {
  expect(index(1)).toBe(true);
});

test('palindromeNumber("9") return true', () => {
  expect(index(9)).toBe(true);
});

test('palindromeNumber("10") return false', () => {
  expect(index(10)).toBe(false);
});

test('palindromeNumber("112211") return true', () => {
  expect(index(112211)).toBe(true);
});

test('palindromeNumber("12321") return true', () => {
  expect(index(12321)).toBe(true);
});

test('palindromeNumber("1111") return true', () => {
  expect(index(1111)).toBe(true);
});

test('palindromeNumber("11111") return true', () => {
  expect(index(11111)).toBe(true);
});

test('palindromeNumber("11") return true', () => {
  expect(index(11)).toBe(true);
});

test('palindromeNumber("121") return true', () => {
  expect(index(121)).toBe(true);
});

