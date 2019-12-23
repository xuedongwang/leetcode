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

test('reverseNum(1990474529917009) revert is 9007199254740991', () => {
  expect(index(1990474529917009)).toBe(9007199254740991);
});

// 900719925474099

test('reverseNum(-1990474529917009) revert is -9007199254740991', () => {
  expect(index(-1990474529917009)).toBe(-9007199254740991);
});

test('reverseNum(1234567123456789) revert is 0', () => {
  expect(index(1234567123456789)).toBe(0);
});

test('reverseNum(-1234567123456789) revert is 0', () => {
  expect(index(-1234567123456789)).toBe(0);
});
