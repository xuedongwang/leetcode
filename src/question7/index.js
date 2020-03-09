/**
 * @ref: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

const removeDuplicates = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let prev = nums[0];
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] === prev) {
      nums.splice(i, 1);
      i --;
    } else {
      prev = nums[i];
    }
  }
  return nums.length;
}

module.exports = removeDuplicates;

// 示例 1:

// 给定数组 nums = [1,1,2], 

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

// 你不需要考虑数组中超出新长度后面的元素。
// 示例 2:

// 给定 nums = [0,0,1,1,1,2,2,3,3,4],

// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
