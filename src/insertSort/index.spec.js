
const insertSort = require('./index');

test('insertSort([1,2,3]) return [1,2,3]', () => {
  expect(insertSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('insertSort([3,2,1]) return [1,2,3]', () => {
  expect(insertSort([3, 2, 1])).toEqual([1, 2, 3]);
});
