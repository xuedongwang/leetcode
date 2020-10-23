
/**
 * @ref: https://leetcode-cn.com/problems/least-number-of-unique-integers-after-k-removals/
 */

const findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();
  arr.forEach(item => {
    if (!map.has(item)) {
      map.set(item, 0);
    }
    map.set(item, map.get(item) + 1)
  });
  const valueArr = [...map.values()].sort((a, b) => a - b);

  let result = valueArr.length;

  for (let i = 0; i < valueArr.length; i++) {
    const value = valueArr[i];
    if (value <= k) {
      result --;
      k -= value;
    } else {
      return result;
    }
  }
  return result;
}

module.exports = findLeastNumOfUniqueInts;
