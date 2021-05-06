
const binarySearch = require('./index');

test(`binarySearch([-1,0,3,5,9,12], 9) return 4`, () => {
  expect(binarySearch([-1,0,3,5,9,12], 9)).toBe(4);
});

test(`binarySearch([-1,0,3,5,9,12], -1) return 0`, () => {
  expect(binarySearch([-1,0,3,5,9,12], -1)).toBe(0);
});

test(`binarySearch([-1,0,3,5,9,12], 12) return 5`, () => {
  expect(binarySearch([-1,0,3,5,9,12], 12)).toBe(5);
});


test(`binarySearch([-1,0,3,5,9,12], 2) return -1`, () => {
  expect(binarySearch([-1,0,3,5,9,12], 2)).toBe(-1);
});

// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1
//  

// 提示：

// 你可以假设 nums 中的所有元素是不重复的。
// n 将在 [1, 10000]之间。
// nums 的每个元素都将在 [-9999, 9999]之间。