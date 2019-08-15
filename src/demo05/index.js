/**
 * @ref: https://leetcode-cn.com/problems/longest-common-prefix/
 */

const longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i ++) {
    while(strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix.length) {
        return '';
      }
    }
  }
  return prefix;
}

module.exports = longestCommonPrefix;

// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 输入: ["dog","racecar","car"]
// 输出: ""