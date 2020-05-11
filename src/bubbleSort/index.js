
/**
 * @ref: https://juejin.im/post/5d6dcd59e51d45620c1c5416
 * 冒泡排序 js 实现
 */

function swap (arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const bubbleSort = function (arr) {
  for (let x = 0; x < arr.length; x ++) {
    for (let i = 0; i < arr.length - 1 - x; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  console.log(arr);
  return arr;
}

module.exports = bubbleSort;
