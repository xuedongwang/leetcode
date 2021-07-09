
const maximumWealth = require('./index');

test('maximumWealth([[1,2,3],[3,2,1]]) return 6', () => {
  expect(maximumWealth([[1, 2, 3], [3, 2, 1]])).toBe(6);
});

test('maximumWealth([[1,5],[7,3],[3,5]]) return 10', () => {
  expect(maximumWealth([[1, 5], [7, 3], [3, 5]])).toBe(10);
});

test('maximumWealth([[2,8,7],[7,1,3],[1,9,5]]) return 17', () => {
  expect(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toBe(17);
});
