
const reverseInteger = require('./index');

test('reverseInteger(123) return 321', () => {
  expect(reverseInteger(123)).toBe(321);
});

test('reverseInteger(-123) return -321', () => {
  expect(reverseInteger(-123)).toBe(-321);
});

test('reverseInteger(0) return 0', () => {
  expect(reverseInteger(0)).toBe(0);
});

test('reverseInteger(8463847412) return 0', () => {
  expect(reverseInteger(8463847412)).toBe(0);
});

test('reverseInteger(7463847412) return 2147483647', () => {
  expect(reverseInteger(7463847412)).toBe(2147483647);
});

test('reverseInteger(-8463847412) return -2147483648', () => {
  expect(reverseInteger(-8463847412)).toBe(-2147483648);
});

test('reverseInteger(-9463847412) return 0', () => {
  expect(reverseInteger(-9463847412)).toBe(0);
});


test('reverseInteger(12345678999) return 0', () => {
  expect(reverseInteger(12345678999)).toBe(0);
});

