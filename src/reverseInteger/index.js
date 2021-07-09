
/**
 * @ref: https://leetcode-cn.com/problems/reverse-integer/
 */

const reverseInteger = function (x) {
  const MAX = Math.pow(2, 31) - 1; // 2147483647
  const MIN = -Math.pow(2, 31); // -2147483648
  let result = 0;
  while (x !== 0) {
    const last = x % 10;
    x = parseInt(x / 10);

    // to big
    if (result > MAX / 10 || result === parseInt(MAX / 10) && last > MAX % 10) {
      return 0;
    }
    // to small
    if (result < MIN / 10 || result === parseInt(MIN / 10) && last < MIN % 10) {
      return 0;
    }

    result = result * 10 + last;
  }

  return result;
};

module.exports = reverseInteger;
