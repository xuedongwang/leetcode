
const thirdMax = require('./index');

test('thirdMax([3,2,1]) return 1', () => {
  expect(thirdMax([3, 2, 1])).toBe(1);
});

test('thirdMax([1,2]) return 2', () => {
  expect(thirdMax([1, 2])).toBe(2);
});

test('thirdMax([2,2,3,1]) return 1', () => {
  expect(thirdMax([2, 2, 3, 1])).toBe(1);
});
