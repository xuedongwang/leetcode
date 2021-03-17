
const MinStack = require('./index');

const minStack = new MinStack();

test(`minStack.push(1) return null`, () => {
  expect(minStack.push(1)).toBe(null);
});

test(`minStack.push(2) return null`, () => {
  expect(minStack.push(2)).toBe(null);
});

test(`minStack.push(-1) return null`, () => {
  expect(minStack.push(-1)).toBe(null);
});

test(`minStack.top() return -1`, () => {
  expect(minStack.top()).toBe(-1);
});

test(`minStack.getMin() return -1`, () => {
  expect(minStack.getMin()).toBe(-1);
});

test(`minStack.pop() return -1`, () => {
  expect(minStack.pop()).toBe(-1);
});

test(`minStack.top() return 2`, () => {
  expect(minStack.top()).toBe(2);
});

test(`minStack.getMin() return 1`, () => {
  expect(minStack.getMin()).toBe(1);
});

