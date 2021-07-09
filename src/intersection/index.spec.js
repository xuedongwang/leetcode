
const intersection = require('./index');

test('intersection([1,2,2,1],[2,2]) return [2]', () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toEqual(expect.arrayContaining([2]));
  expect(intersection([1, 2, 2, 1], [2, 2]).length).toEqual(1);
});

test('intersection([4,9,5],[9,4,9,8,4]) return [9,4]', () => {
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(expect.arrayContaining([9, 4]));
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4]).length).toEqual(2);
});
