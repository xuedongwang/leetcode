
const game = require('./index');

test('game([1,2,3], [1,2,3]) return 3', () => {
  expect(game([1, 2, 3], [1, 2, 3])).toBe(3);
});

test('game([2,2,3],[3,2,1]) return 3,2,1', () => {
  expect(game([2, 2, 3], [3, 2, 1])).toBe(1);
});
