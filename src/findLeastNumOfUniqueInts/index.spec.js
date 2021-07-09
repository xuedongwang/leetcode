
const findLeastNumOfUniqueInts = require('./index');

test('findLeastNumOfUniqueInts([5,5,4],1) return 1', () => {
  expect(findLeastNumOfUniqueInts([5, 5, 4], 1)).toBe(1);
});

test('findLeastNumOfUniqueInts([4,3,1,1,3,3,2],3) return 2', () => {
  expect(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)).toBe(2);
});

test('findLeastNumOfUniqueInts([1],1) return 0', () => {
  expect(findLeastNumOfUniqueInts([1], 1)).toBe(0);
});
