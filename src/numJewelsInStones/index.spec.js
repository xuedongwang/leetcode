
const numJewelsInStones = require('./index');

test(`numJewelsInStones('aA', 'aAAbbbb') return 3`, () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
});

test(`numJewelsInStones('s', 'ZZ') return 0`, () => {
  expect(numJewelsInStones('s', 'ZZ')).toBe(0);
});

