const index = require('./index');

test('validParentheses("()") return true', () => {
  expect(index('()')).toBe(true);
});

test('validParentheses("()[]{}") return true', () => {
  expect(index('()[]{}')).toBe(true);
});

test('validParentheses("(]") return true', () => {
  expect(index('(]')).toBe(false);
});

test('validParentheses("(]") return true', () => {
  expect(index('(]')).toBe(false);
});

test('validParentheses("([)]") return true', () => {
  expect(index('([)]')).toBe(false);
});

test('validParentheses("{[]}") return true', () => {
  expect(index('{[]}')).toBe(true);
});

