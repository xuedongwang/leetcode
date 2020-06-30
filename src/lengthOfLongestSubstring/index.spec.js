
const lengthOfLongestSubstring = require('./index');

test('lengthOfLongestSubstring(abcabcbb) return 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('lengthOfLongestSubstring(bbbbb) return 1', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('lengthOfLongestSubstring(pwwkew) return 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});

test('lengthOfLongestSubstring(aab) return 2', () => {
  expect(lengthOfLongestSubstring('aab')).toBe(2);
});

test('lengthOfLongestSubstring(tmmzuxt) return 5', () => {
  expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5);
});

