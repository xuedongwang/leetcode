const index = require('./index');

test('reverseNum(123) revert is 321', () => {
  expect(index(123)).toBe(321);
});

test('reverseNum(12345678) revert is 87654321', () => {
  expect(index(12345678)).toBe(87654321);
});

test('reverseNum(-12345678) revert is -87654321', () => {
  expect(index(-12345678)).toBe(-87654321);
});

test('reverseNum(9007199254740991) revert is 1990474529917009', () => {
  expect(index(9007199254740991)).toBe(1990474529917009);
});

test('reverseNum(1234567123456789) revert is 0', () => {
  expect(index(1234567123456789)).toBe(0);
});

test('reverseNum(-1234567123456789) revert is 0', () => {
  expect(index(-1234567123456789)).toBe(0);
});
