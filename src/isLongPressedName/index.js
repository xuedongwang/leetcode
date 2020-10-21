
/**
 * @ref: https://leetcode-cn.com/problems/long-pressed-name/
 */


const isLongPressedName = function (name, typed) {
  const m = name.length;
  const n = typed.length;
  let i = 0;
  let j = 0;
  while (j < n) {
    if (i < m && name[i] === typed[j]) {
      i ++;
      j ++;
    } else if (j < n && typed[j] === typed[j - 1]) {
      j ++;
    } else {
      return false;
    }
  }
  return i === m;
}

module.exports = isLongPressedName;
