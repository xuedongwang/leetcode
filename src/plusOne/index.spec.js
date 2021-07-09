
const plusOne = require('./index');

test('plusOne([1,2,3,4]) return [1,2,3,5]', () => {
  expect(plusOne([1, 2, 3, 4])).toEqual([1, 2, 3, 5]);
});

test('plusOne([1,2,3,9]) return [1,2,4,0]', () => {
  expect(plusOne([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
});

test('plusOne([9,9,9]) return [1,0,0,0]', () => {
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});
