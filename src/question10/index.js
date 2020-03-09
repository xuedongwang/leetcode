/**
 * @ref: https://leetcode-cn.com/problems/implement-strstr/
 */

const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i ++) {
    for (let j = 0; j < needle.length; j ++) {
      if (needle[j] === haystack[j + i]) {
        if (j === needle.length - 1) {
          return i;
        }
      } else {
        break;
      }
    }
  }
  return -1;
}

module.exports = strStr;

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
// 说明:

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
