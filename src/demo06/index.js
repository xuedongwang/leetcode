/**
 * @ref: https://leetcode-cn.com/problems/valid-parentheses/
 */

const validParentheses = function (s) {
  const left = ['[', '(', '{'];
  const rightMap = {
    '[': ']',
    '(': ')',
    '{': '}'
  };
  let temp = [];

  for (let i = 0; i < s.length; i ++) {
    if (left.includes(s[i])) {
      temp.push(s[i]);
    } else {
      if (rightMap[temp.slice(-1)[0]] === s[i]) {
        temp.splice(-1);
      } else {
        return false;
      }
    }
  }

  return !temp.length;
}

module.exports = validParentheses;

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true
