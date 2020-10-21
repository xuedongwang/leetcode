
/**
 * @ref: https://leetcode-cn.com/problems/long-pressed-name/
 */


const isLongPressedName = function (name, typed) {
  const n = name.length;
  const m = typed.length;
  let i = 0;
  let j = 0;
  while (j < m) {
    if (i < n && name[i] === typed[j]) {
      i ++;
      j ++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j ++
    } else {
      return false;
    }
  }
  return i === n;
}

module.exports = isLongPressedName;
