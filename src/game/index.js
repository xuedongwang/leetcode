
/**
 * @ref: https://leetcode-cn.com/problems/guess-numbers/
 */

const game = function (guess, answer) {
  let correctCount = 0;
  guess.forEach((item, index) => {
    if (item === answer[index]) {
      correctCount ++;
    }
  });
  return correctCount;
}

module.exports = game;
