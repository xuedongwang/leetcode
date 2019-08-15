const index = require('./index');

test('romanToInt("III") return 3', () => {
  expect(index('III')).toBe(3);
});

test('romanToInt("V") return 5', () => {
  expect(index('V')).toBe(5);
});

test('romanToInt("IV") return 4', () => {
  expect(index('IV')).toBe(4);
});

test('romanToInt("VI") return 6', () => {
  expect(index('VI')).toBe(6);
});

test('romanToInt("VII") return 7', () => {
  expect(index('VII')).toBe(7);
});

test('romanToInt("VIII") return 8', () => {
  expect(index('VIII')).toBe(8);
});

test('romanToInt("IX") return 9', () => {
  expect(index('IX')).toBe(9);
});

test('romanToInt("LVIII") return 58', () => {
  expect(index('LVIII')).toBe(58);
});

test('romanToInt("MCMXCIV") return 1994', () => {
  expect(index('MCMXCIV')).toBe(1994);
});