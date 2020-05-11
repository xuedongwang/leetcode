
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
  let m = Math.floor(arr.length / 2)
  console.log(m);
  let left = mergeSort(arr.slice(0, m))
  let right = mergeSort(arr.slice(m))
  return merge(left, right)
}

module.exports = mergeSort;
