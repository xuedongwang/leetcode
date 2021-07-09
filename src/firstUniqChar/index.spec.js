
const firstUniqChar = require('./index');

test('firstUniqChar(\'leetcode\') return 0', () => {
  expect(firstUniqChar('leetcode')).toBe(0);
});

test('firstUniqChar(\'loveleetcode\') return 2', () => {
  expect(firstUniqChar('loveleetcode')).toBe(2);
});
