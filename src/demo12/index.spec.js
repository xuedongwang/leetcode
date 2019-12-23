const search = require('./index');

test('search([-1,0,3,5,9,12,13], 9) return 4', () => {
  expect(search([-1,0,3,5,9,12,13], 9)).toBe(4);
});

test('search([-1,0,3,5,9,12], 2) return 2', () => {
  expect(search([-1,0,3,5,9,12], 2)).toBe(-1);
});
