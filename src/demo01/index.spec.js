const index = require('./index');

test('twoNumberSum([2, 7, 11, 15], 9) return [0, 1]', () => {
  expect(index([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('twoNumberSum([1, 2, 3, 4], 5) return [0, 3]', () => {
  expect(index([1, 2, 3, 4], 5)).toEqual([0, 3]);
});

test('twoNumberSum([-1, -2, -3, -4], -4) return [0, 2]', () => {
  expect(index([-1, -2, -3, -4], -4)).toEqual([0, 2]);
});

test('twoNumberSum([-2, 0, -3, 4], -3) return [1, 2]', () => {
  expect(index([-2, 0, -3, 4], -3)).toEqual([1, 2]);
});