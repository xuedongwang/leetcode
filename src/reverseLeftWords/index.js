
/**
 * @ref: https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 */

const reverseLeftWords = function (s, n) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < s.length; i++) {
    if (i >= n) {
      str1 += s[i];
    } else {
      str2 += s[i];
    }
  }
  return str1 + str2;
};

module.exports = reverseLeftWords;

// 示例 1：

// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
// 示例 2：

// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"
