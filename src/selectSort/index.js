
/**
 * @ref: https://juejin.im/post/5d6f14c5e51d4561f17a5130
 */

function swap (arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const selectSort = function (arr) {
  for (let x = 0; x < arr.length - 1; x ++) {
    let minIndex = x;
    for (let i = minIndex + 1; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }
    if (x !== minIndex) {
      swap(arr, x, minIndex);
    }
  }
  return arr;
}

module.exports = selectSort;
