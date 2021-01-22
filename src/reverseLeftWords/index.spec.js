
const reverseLeftWords = require('./index');

test(`reverseLeftWords('abcdefg', 2) return 'cdefgab'`, () => {
  expect(reverseLeftWords('abcdefg', 2)).toBe('cdefgab');
});

test(`reverseLeftWords('lrloseumgh', 6) return 'umghlrlose'`, () => {
  expect(reverseLeftWords('lrloseumgh', 6)).toBe('umghlrlose');
});

