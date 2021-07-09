
/**
 * @ref: https://leetcode-cn.com/problems/number-of-good-pairs/
 */

const numIdenticalPairs = function (nums) {
  let result = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    }
    result += map.get(nums[i]);
    map.set(nums[i], map.get(nums[i]) + 1);
  }
  return result;
};

module.exports = numIdenticalPairs;
