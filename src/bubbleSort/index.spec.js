
const bubbleSort = require('./index');

test('bubbleSort([1,2,3]) return [1,2,3]', () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('bubbleSort([3,2,1]) return [1,2,3]', () => {
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
});
