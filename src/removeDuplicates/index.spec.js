
const removeDuplicates = require('./index');

test(`removeDuplicates('abbaca') return 'ca'`, () => {
  expect(removeDuplicates('abbaca')).toBe('ca');
});

