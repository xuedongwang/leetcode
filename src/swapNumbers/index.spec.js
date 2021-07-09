
const swapNumbers = require('./index');

test('swapNumbers([1,2]) return [2,1]', () => {
  expect(swapNumbers([1, 2])).toEqual([2, 1]);
});
test('swapNumbers([4,5]) return [5,4]', () => {
  expect(swapNumbers([4, 5])).toEqual([5, 4]);
});
