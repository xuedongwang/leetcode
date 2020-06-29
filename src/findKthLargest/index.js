
/**
 * @ref: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */

const findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
}

module.exports = findKthLargest;
