
const selectSort = require('./index');

test('selectSort([1,2,3]) return [1,2,3]', () => {
  expect(selectSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('selectSort([3,2,1]) return [1,2,3]', () => {
  expect(selectSort([3, 2, 1])).toEqual([1, 2, 3]);
});
