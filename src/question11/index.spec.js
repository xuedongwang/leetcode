const index = require('./index');

test('maxSubArray([1, 2, 3, 4, -1]) return 10', () => {
  expect(index([1,2,3,4,-1])).toBe(10);
});

test('maxSubArray([1]) return 1', () => {
  expect(index([1])).toBe(1);
});

test('maxSubArray([1,2,-2,3]) return 4', () => {
  expect(index([1,2,-2,3])).toBe(4);
});