
const singleNumber = require('./index');

test('singleNumber([2,2,1]) return 1', () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
});

test('singleNumber([4,1,2,1,2]) return 4', () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});
