
const quickSort = require('./index');

test('quickSort([5,4,3,2,1]) return [1,2,3,4,5]', () => {
  expect(quickSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
});

test('quickSort([1,2,3]) return [1,2,3]', () => {
  expect(quickSort([1,2,3])).toEqual([1,2,3]);
});

test('quickSort([3,2,1]) return [1,2,3]', () => {
  expect(quickSort([3,2,1])).toEqual([1,2,3]);
});

