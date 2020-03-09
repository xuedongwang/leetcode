/**
 * @ref: https://leetcode-cn.com/problems/reverse-integer/
 */

const reverseInteger = function (num) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = - Math.pow(2, 31);
  let result = 0;
  while (num !== 0) {
    const last = num % 10;
    num = parseInt(num / 10);
    if (result > parseInt(MAX / 10) || result === parseInt(MAX / 10) && (last > MAX % 10)) {
      return 0;
    }
    if (result < parseInt(MIN / 10) || result === parseInt(MIN / 10) && (last < MIN % 10)) {
      return 0;
    }
    result = result * 10 + last;
  }
  return result;
}

module.exports = reverseInteger;