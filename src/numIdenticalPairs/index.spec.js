
const numIdenticalPairs = require('./index');

test('numIdenticalPairs([1,2,3,1,1,3]) return 4', () => {
  expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
});

test('numIdenticalPairs([1, 1, 1, 1]) return 6', () => {
  expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
});

test('numIdenticalPairs([1, 2, 3]) return 0', () => {
  expect(numIdenticalPairs([1, 2, 3])).toBe(0);
});
