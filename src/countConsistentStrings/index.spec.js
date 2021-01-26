
const countConsistentStrings = require('./index');

test(`countConsistentStrings('ab', ["ad","bd","aaab","baa","badab"]) return 2`, () => {
  expect(countConsistentStrings('ab', ["ad","bd","aaab","baa","badab"])).toBe(2);
});

test(`countConsistentStrings('abc', ["a","b","c","ab","ac","bc","abc"]) return 7`, () => {
  expect(countConsistentStrings('abc', ["a","b","c","ab","ac","bc","abc"])).toBe(7);
});

test(`countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"]) return 4`, () => {
  expect(countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"])).toBe(4);
});

