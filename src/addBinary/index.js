
/**
 * @ref: https://leetcode-cn.com/problems/add-binary/
 */

const addBinary = function (a, b) {
  let aLength = a.length;
  let bLength = b.length;
  let curry = 0;
  let sum = '';
  while (aLength > 0 || bLength > 0) {
    let m = 0;
    let n = 0;
    if (aLength > 0) {
      m = parseInt(a[aLength - 1]);
      aLength--;
    }
    if (bLength > 0) {
      n = parseInt(b[bLength - 1]);
      bLength--;
    }
    let total = m + n + curry;
    if (total > 1) {
      curry = 1;
      total -= 2;
    } else {
      curry = 0;
    }

    sum = total + sum;
  }
  if (curry > 0) {
    sum = curry + sum;
  }
  return sum;
};

module.exports = addBinary;
