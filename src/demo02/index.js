/**
 * @ref: https://leetcode-cn.com/problems/reverse-integer/
 */

const reverse = function (x) {
  let ret = 0;
  debugger;
  while (x !== 0) {
    const pop = x % 10;
    x = parseInt(x / 10);
    // if (ret > Number.MAX_SAFE_INTEGER / 10 || (ret === Number.MAX_SAFE_INTEGER / 10 && (pop > Number.MAX_SAFE_INTEGER % 10))) { // to big
    //   return 0;
    // }
    // if (ret < Number.MAX_SAFE_INTEGER / 10 || (ret === Number.MAX_SAFE_INTEGER / 10 && (pop < Number.MAX_SAFE_INTEGER % 10))) { // to small
    //   return 0;
    // }
    ret = ret * 10 + pop;
    if (ret > Number.MAX_SAFE_INTEGER || ret < Number.MIN_SAFE_INTEGER) {
      return 0;
    }
  }
  return ret;
}

module.exports = reverse;