/**
 * @ref: https://leetcode-cn.com/problems/palindrome-number/
 */

const palindromeNumber = function (num) {
  const numStr = num.toString()
  return numStr === numStr.split('').reverse().join('');
}

module.exports = palindromeNumber;