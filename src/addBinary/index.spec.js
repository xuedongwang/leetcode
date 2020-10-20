
const addBinary = require('./index');

test(`addBinary('1', '1') return '10'`, () => {
  expect(addBinary('1', '1')).toBe('10');
});

test(`addBinary('1', '0') return '1'`, () => {
  expect(addBinary('1', '0')).toBe('1');
});

test(`addBinary('0', '1') return '1'`, () => {
  expect(addBinary('0', '1')).toBe('1');
});

test(`addBinary('0', '0') return '0'`, () => {
  expect(addBinary('0', '0')).toBe('0');
});

test(`addBinary('11', '11') return '110'`, () => {
  expect(addBinary('11', '11')).toBe('110');
});

test(`addBinary('111', '11') return '1010'`, () => {
  expect(addBinary('111', '11')).toBe('1010');
});

test(`addBinary('11', '111') return '1010'`, () => {
  expect(addBinary('11', '111')).toBe('1010');
});