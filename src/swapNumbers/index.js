
/**
 * @ref: https://leetcode-cn.com/problems/swap-numbers-lcci/
 */

const swapNumbers = function (numbers) {
  numbers[0] = numbers[1] ^ numbers[0];
  numbers[1] = numbers[0] ^ numbers[1];
  numbers[0] = numbers[0] ^ numbers[1];
  return numbers;
};

module.exports = swapNumbers;
