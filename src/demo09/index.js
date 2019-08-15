/**
 * @ref: https://leetcode-cn.com/problems/search-insert-position/
 * @date 2019-08-01 11:32:35
 */

const searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index !== -1) {
    return index;
  } else {
    for (let i = 0; i < nums.length; i ++) {
      if (target < nums[i]) {
        return i;
      }
      if (i === nums.length - 1) {
        return nums.length;
      }
    }
  }
}

module.exports = searchInsert;

// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2

// 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1

// 示例 3:
// 输入: [1,3,5,6], 7
// 输出: 4

// 示例 4:
// 输入: [1,3,5,6], 0
// 输出: 0

