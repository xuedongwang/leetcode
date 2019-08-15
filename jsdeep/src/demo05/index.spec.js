const index = require('./index');

test('longestCommonPrefix(["flower","flow","flight"]) return fl', () => {
  expect(index(["flower","flow","flight"])).toBe('fl');
});

test('longestCommonPrefix(["dog","racecar","car"]) return ""', () => {
  expect(index(["dog","racecar","car"])).toBe('');
});

test('longestCommonPrefix(["a"]) return "a"', () => {
  expect(index(["a"])).toBe('a');
});

test('longestCommonPrefix(["a", "a"]) return "a"', () => {
  expect(index(["a", "a"])).toBe('a');
});

test('longestCommonPrefix(["", "45"]) return ""', () => {
  expect(index([""])).toBe('');
});

test('longestCommonPrefix([]) return ""', () => {
  expect(index([])).toBe('');
});
