
const asteroidCollision = require('./index');

test('asteroidCollision([5, 10, -5]) return [5, 10]', () => {
  expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
});

test('asteroidCollision([8, -8]) return []', () => {
  expect(asteroidCollision([8, -8])).toEqual([]);
});

test('asteroidCollision([10, 2, -5]) return [10]', () => {
  expect(asteroidCollision([10, 2, -5])).toEqual([10]);
});

test('asteroidCollision([-2, -1, 1, 2]) return [-2, -1, 1, 2]', () => {
  expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
});

test('asteroidCollision([]) return []', () => {
  expect(asteroidCollision([])).toEqual([]);
});

