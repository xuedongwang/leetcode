const index = require('./index');

test('removeDuplicates([1,1,2]) return 2', () => {
  expect(index([1,1,2])).toEqual(2);
});

test('removeDuplicates([0,0,1,1,1,2,2,3,3,4]) return 5', () => {
  expect(index([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
});