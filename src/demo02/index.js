/**
 * @ref: https://leetcode-cn.com/problems/reverse-integer/
 */

const reverseNum = function (num) {
  const max = Number.MAX_SAFE_INTEGER;
  const min = Number.MIN_SAFE_INTEGER;
  // const min = Math.pow(-2, 31);
  // const max = Math.pow(2, 31) - 1;
  let ret;
  if (num >= 0) {
    ret = +num.toString().split('').reverse().join('');
  } else {
    ret = -num.toString().slice(1).split('').reverse().join('');
  }
  if (ret >= min && ret <= max) {
    return ret;
  } else {
    return 0;
  }
}

module.exports = reverseNum;