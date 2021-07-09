
/**
 * @ref: https://leetcode-cn.com/problems/goal-parser-interpretation/
 */

const interpret = function (command) {
  const map = new Map([
    ['G', 'G'],
    ['()', 'o'],
    ['(al)', 'al']
  ]);
  let temp = '';
  let result = '';
  for (let i = 0; i < command.length; i++) {
    temp += command[i];
    if (map.has(temp)) {
      result += map.get(temp);
      temp = '';
    }
  }
  return result;
};

module.exports = interpret;

// 示例 1：

// 输入：command = "G()(al)"
// 输出："Goal"
// 解释：Goal 解析器解释命令的步骤如下所示：
// G -> G
// () -> o
// (al) -> al
// 最后连接得到的结果是 "Goal"
// 示例 2：

// 输入：command = "G()()()()(al)"
// 输出："Gooooal"
// 示例 3：

// 输入：command = "(al)G(al)()()G"
// 输出："alGalooG"
