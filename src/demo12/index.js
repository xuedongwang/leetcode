/**
 * ref: https://leetcode-cn.com/explore/learn/card/binary-search/208/background/833/
 */

/**
 * @param {Array} nums 
 * @param {Number} target 
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + ((end - start) >> 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// 示例 1:

// 输入: nums = [-1,0,3,5,9,12,13], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

module.exports = search;
