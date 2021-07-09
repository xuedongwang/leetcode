
/**
 * @ref: https://leetcode-cn.com/problems/min-stack/
 */

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = [];
  this.minStack = [Infinity];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
  return null;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.minStack.pop();
  return this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

module.exports = MinStack;
