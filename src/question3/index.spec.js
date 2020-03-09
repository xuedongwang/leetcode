const index = require('./index');

test('isPalindrome(-121) return false', () => {
  expect(index(-121)).toBe(false);
});

test('isPalindrome(0) return true', () => {
  expect(index(0)).toBe(true);
});

test('isPalindrome(1) return true', () => {
  expect(index(1)).toBe(true);
});

test('isPalindrome(10) return false', () => {
  expect(index(10)).toBe(false);
});

test('isPalindrome(112211) return true', () => {
  expect(index(112211)).toBe(true);
});

test('isPalindrome(12321) return true', () => {
  expect(index(12321)).toBe(true);
});

test('isPalindrome(11111) return true', () => {
  expect(index(11111)).toBe(true);
});

test('isPalindrome(11) return true', () => {
  expect(index(11)).toBe(true);
});

test('isPalindrome(121) return true', () => {
  expect(index(121)).toBe(true);
});

