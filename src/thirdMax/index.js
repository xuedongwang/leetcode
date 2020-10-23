
/**
 * @ref: https://leetcode-cn.com/problems/third-maximum-number/
 */

const thirdMax = function (nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;
  nums.forEach(num => {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  });
  return third === Number.MIN_SAFE_INTEGER ? first : third;
}

module.exports = thirdMax;
