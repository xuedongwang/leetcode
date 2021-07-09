
const mergeSort = require('./index');

test('mergeSort([5,4,3,2,1]) return [1,2,3,4,5]', () => {
  expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('mergeSort([1,2,3]) return [1,2,3]', () => {
  expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('mergeSort([3,2,1]) return [1,2,3]', () => {
  expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
});
