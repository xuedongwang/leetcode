const index = require('./index');

test('removeElement([3,2,2,3],3) return 2', () => {
  expect(index([3,2,2,3], 2)).toEqual(2);
});

test('removeElement([0,1,2,2,3,0,4,2], 2) return 5', () => {
  expect(index([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});