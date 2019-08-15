const index = require('./index');

test('searchInsert([1,3,5,6], 5) return 2', () => {
  expect(index([1,3,5,6], 5)).toBe(2);
});

test('searchInsert([1,3,5,6], 2) return 1', () => {
  expect(index([1,3,5,6], 2)).toBe(1);
});

test('searchInsert([1,3,5,6], 7) return 4', () => {
  expect(index([1,3,5,6], 7)).toBe(4);
});

test('searchInsert([1,3,5,6], 0) return 0', () => {
  expect(index([1,3,5,6], 0)).toBe(0);
});