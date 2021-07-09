
/**
 * @ref: https://leetcode-cn.com/problems/two-sum/
 */

const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const v = target - nums[i];
    if (map.has(v)) {
      return [map.get(v), i];
    }
    map.set(nums[i], i);
  }
};

module.exports = twoSum;
