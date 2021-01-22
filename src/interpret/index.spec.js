
const interpret = require('./index');

test(`interpret('G()(al)') return 'Goal'`, () => {
  expect(interpret('G()(al)')).toBe('Goal');
});

test(`interpret('G()()()()(al)') return 'Gooooal'`, () => {
  expect(interpret('G()()()()(al)')).toBe('Gooooal');
});

test(`interpret('(al)G(al)()()G') return 'alGalooG'`, () => {
  expect(interpret('(al)G(al)()()G')).toBe('alGalooG');
});

