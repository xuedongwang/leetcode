
/**
 * @ref: https://leetcode-cn.com/problems/remove-outermost-parentheses/
 */

const removeOuterParentheses = function (S) {
  let result = '';
  let stack = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(' && stack++ > 0) {
      result += S[i]
    }
    if (S[i] === ')' && stack-- > 1) {
      result += S[i]
    }
  }
  return result;
}

module.exports = removeOuterParentheses;
