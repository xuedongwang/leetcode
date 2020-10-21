
const isLongPressedName = require('./index');

test(`isLongPressedName('alex', 'aaleex') return true`, () => {
  expect(isLongPressedName('alex', 'aaleex')).toBe(true);
});

test(`isLongPressedName('saeed', 'ssaaedd') return false`, () => {
  expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false);
});

test(`isLongPressedName('leelee', 'lleeelee') return true`, () => {
  expect(isLongPressedName('leelee', 'lleeelee')).toBe(true);
});

test(`isLongPressedName('laiden', 'laiden') return true`, () => {
  expect(isLongPressedName('laiden', 'laiden')).toBe(true);
});

test(`isLongPressedName('kikcxmvzi', 'kiikcxxmmvvzz') return false`, () => {
  expect(isLongPressedName('kikcxmvzi', 'kiikcxxmmvvzz')).toBe(false);
});

test(`isLongPressedName('znxnorutzt', 'zznxxnnooruuzztt') return false`, () => {
  expect(isLongPressedName('znxnorutzt', 'zznxxnnooruuzztt')).toBe(false);
});

test(`isLongPressedName('alex', 'aaleelx') return false`, () => {
  expect(isLongPressedName('alex', 'aaleelx')).toBe(false);
});