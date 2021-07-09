
/**
 * @ref: https://leetcode-cn.com/problems/running-sum-of-1d-array/
 */

const runningSum = function (nums) {
  const result = [];
  nums.reduce((a, b) => {
    const total = a + b;
    result.push(total);
    return total;
  }, 0);
  return result;
};

module.exports = runningSum;
