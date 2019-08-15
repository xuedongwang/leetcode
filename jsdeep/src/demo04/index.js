/**
 * @ref: https://leetcode-cn.com/problems/roman-to-integer/
 */

const romanToInt = function (s) {

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let ret = 0;
  let num = 0;

  for (let i = 0; i < s.length; i ++) {
    if (s[i+1]) {
      if (map[s[i]] < map[s[i+1]]) {
        num = map[s[i+1]] - map[s[i]];
        i ++;
      } else {
        num = map[s[i]];
      }
    } else {
      num = map[s[i]];
    }
    ret += num;
  }
  
  return ret;
}

module.exports = romanToInt;

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。


