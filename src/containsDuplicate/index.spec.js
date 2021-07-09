
const containsDuplicate = require('./index');

test(`containsDuplicate([1,2,3,1]) return true`, () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true);
});

test(`containsDuplicate([1,2,3,4]) return false`, () => {
  expect(containsDuplicate([1,2,3,4])).toBe(false);
});

test(`containsDuplicate([1,1,1,3,3,4,3,2,4,2]) return true`, () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});

