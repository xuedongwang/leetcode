/**
 * @ref: https://leetcode-cn.com/problems/two-sum/
 */

// const twoNumberSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// const twoNumberSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
//       return [i, map.get(target - nums[i])]
//     }
//   }
// }

const twoNumberSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const v = target - nums[i];
    if (map.has(v)) {
      return [map.get(v), i];
    }
    map.set(nums[i], i);
  }
}

module.exports = twoNumberSum;