
/**
 * @ref: https://leetcode-cn.com/problems/binary-search/
 */

const binarySearch = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const mid = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (nums[mid] < target) {
      startIndex = mid + 1;
    } else if (nums[mid] > target) {
      endIndex = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

module.exports = binarySearch;

/**
示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
 */
