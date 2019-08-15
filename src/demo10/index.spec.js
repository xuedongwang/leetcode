const index = require('./index');

test('strStr("hello","ll") return 2', () => {
  expect(index("hello", "ll")).toBe(2);
});

test('strStr("aaaaa", "bba") return 5', () => {
  expect(index("aaaaa", "bba")).toBe(-1);
});