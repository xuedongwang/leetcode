
/**
 * @ref: https://leetcode-cn.com/problems/plus-one/
 */

const plusOne = function (digits) {
  let curry = 1;
  const result = [];

  while (digits.length) {
    const last = digits.pop();
    let sum = last + curry;
    if (sum >= 10) {
      sum -= 10;
    } else {
      curry = 0;
    }
    result.unshift(sum);
  }

  if (curry > 0) {
    result.unshift(curry);
  }
  return result;
}

module.exports = plusOne;
