
/**
 * @ref: https://juejin.im/post/5d72201df265da03ca11906d
 */

const insertSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    let target = arr[index];
    while (index > 0 && arr[index - 1] > target) {
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = target;
  }
  return arr;
}

module.exports = insertSort;
