
/**
 * @ref: https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r/
 */

const firstUniqChar = function (s) {
  const m = new Map();
  for (let i of s) {
    if (m.has(i)) {
      m.set(i, m.get(i) + 1);
    } else {
      m.set(i, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (m.get(s[i]) === 1) {
      return i;
    }
  }
}

module.exports = firstUniqChar;
/**
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
 

提示：你可以假定该字符串只包含小写字母。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
