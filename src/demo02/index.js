/**
 * @ref: https://leetcode-cn.com/problems/reverse-integer/
 */

const reverse = function (x) {
  let ret = 0;
  while (x !== 0) {
    const pop = x % 10;
    x = parseInt(x / 10);
    if (ret > parseInt(Number.MAX_SAFE_INTEGER / 10) || (ret === parseInt(Number.MAX_SAFE_INTEGER / 10) && (pop > Number.MAX_SAFE_INTEGER % 10))) { // to big
      return 0;
    }
    if (ret < parseInt(Number.MIN_SAFE_INTEGER / 10) || (ret === parseInt(Number.MIN_SAFE_INTEGER / 10) && (pop < Number.MIN_SAFE_INTEGER % 10))) { // to small
      return 0;
    }
    ret = ret * 10 + pop;
  }
  return ret;
}

module.exports = reverse;