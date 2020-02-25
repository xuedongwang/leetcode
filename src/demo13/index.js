
/**
 * @ref: https://leetcode-cn.com/problems/asteroid-collision/
 */

const asteroidCollision = function (asteroids) {
  if (asteroids.length === 0) {
    return [];
  }
  const result = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (result.length === 0) {
      result.push(asteroids[i]);
    } else {
      const last = result[result.length - 1];
      const target = asteroids[i];
      if (last > 0 & target < 0) {
        if (Math.abs(target) > Math.abs(last)) {
          result.pop();
          i --;
        } else if (Math.abs(target) < Math.abs(last)) {
          continue;
        } else {
          result.pop();
        }
      } else {
        result.push(asteroids[i]);
      }
    }
  }
  return result;

}

module.exports = asteroidCollision;
