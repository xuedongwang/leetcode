
/**
 * @ref: https://juejin.im/post/6844903938915827725
 */

const quickSort = function (arr, start = 0, end = arr.length - 1) {
  if (end - start < 1) {
    return arr;
  }
  const pivotIndex = partition(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
  return arr;
};

function partition (arr, start, end) {
  let j = start;
  const pivot = arr[end];
  for (let i = start; i <= end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  return j - 1;
}

function swap (arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

module.exports = quickSort;
