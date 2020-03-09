const index = require('./index');

const MAX = Math.pow(2, 31) - 1; // 2147483647
const MIN = -Math.pow(2, 31); // -2147483648

test('reverseNum(123) revert is 321', () => {
  expect(index(123)).toBe(321);
});

test('reverseNum(12345678) revert is 87654321', () => {
  expect(index(12345678)).toBe(87654321);
});

test('reverseNum(-12345678) revert is -87654321', () => {
  expect(index(-12345678)).toBe(-87654321);
});

test(`reverseNum(7463847412) revert is 2147483647`, () => {
  expect(index(7463847412)).toBe(2147483647);
});

test(`reverseNum(-8463847412) revert is -2147483648`, () => {
  expect(index(-8463847412)).toBe(-2147483648);
});

test(`reverseNum(${MAX}) revert is 0`, () => {
  expect(index(MAX)).toBe(0);
});

test(`reverseNum(${MIN}) revert is -0`, () => {
  expect(index(MIN)).toBe(0);
});

