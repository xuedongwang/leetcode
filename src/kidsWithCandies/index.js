
/**
 * @ref: https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
 */

const kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(item => item + extraCandies >= max);
};

module.exports = kidsWithCandies;
