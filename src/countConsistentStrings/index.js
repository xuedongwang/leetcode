
/**
 * @ref: https://leetcode-cn.com/problems/count-the-number-of-consistent-strings/
 */

const countConsistentStrings = function (allowed, words) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result++;
    }
  }
  return result;
};

module.exports = countConsistentStrings;

// 示例 1：

// 输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// 输出：2
// 解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
// 示例 2：

// 输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// 输出：7
// 解释：所有字符串都是一致的。
// 示例 3：

// 输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// 输出：4
// 解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。
