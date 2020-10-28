
/**
 * @ref: https://leetcode-cn.com/problems/jewels-and-stones/
 */

const numJewelsInStones = function (J, S) {
  const map = new Map();
  let result = 0;

  for (let i = 0; i < J.length; i++) {
    map.set(J[i], true);
  }

  for (let i = 0; i < S.length; i++) {
    if (map.get(S[i])) {
      result ++;
    }
  }

  return result;
}

module.exports = numJewelsInStones;
