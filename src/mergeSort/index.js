
/**
 * @ref: https://juejin.im/post/5d73187ae51d4561fb04bfc7
 */

const merge = function (left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++
    } else {
      result.push(right[j]);
      j++
    }
  }
  if (i < left.length) {
    result.push(...left.slice(i));
  } else {
    result.push(...right.slice(j));
  }
  return result;
}

const mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let m = Math.floor(arr.length / 2) // 2 // 1
  let left = mergeSort(arr.slice(0, m)) // [5,4] // [5]
  let right = mergeSort(arr.slice(m)) // [4]
  return merge(left, right) // [5] [4] -> [4, 5]
}

module.exports = mergeSort;
