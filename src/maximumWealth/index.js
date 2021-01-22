
/**
 * @ref: https://leetcode-cn.com/problems/richest-customer-wealth/
 */

const maximumWealth = function (accounts) {
  return Math.max(...accounts.map(row => row.reduce((a, b) => a + b, 0)))
}

module.exports = maximumWealth;

// 示例 1：

// 输入：accounts = [[1,2,3],[3,2,1]]
// 输出：6
// 解释：
// 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
// 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
// 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。
// 示例 2：

// 输入：accounts = [[1,5],[7,3],[3,5]]
// 输出：10
// 解释：
// 第 1 位客户的资产总量 = 6
// 第 2 位客户的资产总量 = 10 
// 第 3 位客户的资产总量 = 8
// 第 2 位客户是最富有的，资产总量是 10
// 示例 3：

// 输入：accounts = [[2,8,7],[7,1,3],[1,9,5]]
// 输出：17

