/**
 * @ref: https://leetcode-cn.com/problems/remove-element/
 * @date 2019-08-01 11:32:35
 */

const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i --;
    }
  }
  return nums.length;
}

module.exports = removeElement;


// 示例 1:

// 给定 nums = [3,2,2,3], val = 3,

// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

// 你不需要考虑数组中超出新长度后面的元素。
// 示例 2:

// 给定 nums = [0,1,2,2,3,0,4,2], val = 2,

// 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

// 注意这五个元素可为任意顺序。

// 你不需要考虑数组中超出新长度后面的元素。
