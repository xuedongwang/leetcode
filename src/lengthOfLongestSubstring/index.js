
/**
 * @ref: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
// a b c a b c b b
// 0 1 2 3 4 5 6 7
const lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let right = -1;
  let maxLength = 0;
  const strLength = s.length;
  for (let i = 0; i < strLength; i++) {
    if (i !== 0) {
      set.delete(s[i - 1]);
    }

    while (right < strLength - 1 && !set.has(s[right + 1])) {
      set.add(s[right + 1]);
      right++;
    }
    maxLength = Math.max(maxLength, right - i + 1);
  }
  return maxLength;
};

module.exports = lengthOfLongestSubstring;

// const lengthOfLongestSubstring = function (s) {
//   let maxLength = 0;
//   let currentStr = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (currentStr.includes(s[j])) {
//         maxLength = Math.max(currentStr.length, maxLength);
//         currentStr = '';
//         break;
//       } else {
//         currentStr += s[j];
//       }
//     }
//   }
//   return Math.max(currentStr.length, maxLength);
// }

// module.exports = lengthOfLongestSubstring;

/**
示例 1:
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
