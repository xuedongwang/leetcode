
const removeOuterParentheses = require('./index');

test('removeOuterParentheses(\'(()())(())\') return \'()()()\'', () => {
  expect(removeOuterParentheses('(()())(())')).toBe('()()()');
});

test('removeOuterParentheses(\'(()())(())(()(()))\') return \'()()()()(())\'', () => {
  expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
});

test('removeOuterParentheses(\'()()\') return \'\'', () => {
  expect(removeOuterParentheses('()()')).toBe('');
});
