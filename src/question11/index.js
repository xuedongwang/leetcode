/**
 * @ref: https://leetcode-cn.com/problems/maximum-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums.length === 0) {
    // err
    return;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i ++) {
    currentSum += nums[i];

    if (currentSum > max) {
      max = currentSum;
    }
  }
  return max;
};

module.exports = maxSubArray;

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
