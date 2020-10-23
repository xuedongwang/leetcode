
const runningSum = require('./index');

test(`runningSum([1,2,3,4]) return [1,3,6,10]`, () => {
  expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
});

