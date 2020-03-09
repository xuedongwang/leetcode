/**
 * @ref: https://leetcode-cn.com/problems/palindrome-number/
 */

const isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reverseNumber = 0;
  while (x > reverseNumber) {
    reverseNumber = reverseNumber * 10 + x % 10;
    x = parseInt(x / 10);
  }

  return x === reverseNumber || x === parseInt(reverseNumber / 10)
}

module.exports = isPalindrome;