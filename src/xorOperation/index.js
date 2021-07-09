
/**
 * @ref: https://leetcode-cn.com/problems/xor-operation-in-an-array/
 */

const xorOperation = function (n, start) {
  let result = 0;
  while (n--) {
    const value = start + 2 * n;
    result ^= value;
  }
  return result;
};

module.exports = xorOperation;
