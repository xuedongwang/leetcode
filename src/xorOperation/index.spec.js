
const xorOperation = require('./index');

test('xorOperation(5,0) return 8', () => {
  expect(xorOperation(5, 0)).toBe(8);
});

test('xorOperation(4,3) return 8', () => {
  expect(xorOperation(4, 3)).toBe(8);
});

test('xorOperation(1,7) return 7', () => {
  expect(xorOperation(1, 7)).toBe(7);
});

test('xorOperation(10,5) return 2', () => {
  expect(xorOperation(10, 5)).toBe(2);
});
