
/**
 * @ref: https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return func(set1, set2);
}

function func(set1, set2) {
  if (set1.size > set2.size) {
    return func(set2, set1);
  }
  const result = [];
  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }
  return result;
}

module.exports = intersection;
