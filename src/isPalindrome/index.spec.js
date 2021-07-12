
const isPalindrome = require('./index');

test(`isPalindrome("A man, a plan, a canal: Panama") return true`, () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test(`isPalindrome("race a car") return false`, () => {
  expect(isPalindrome("race a car")).toBe(false);
});
