
const ParkingSystem = require('./index');

test('parkingSystem is instanceof ParkingSystem', () => {
  const parkingSystem = new ParkingSystem();
  expect(parkingSystem instanceof ParkingSystem).toBeTruthy();
});

test('ParkingSystem\'s instance has addCar method', () => {
  const parkingSystem = new ParkingSystem();
  /* eslint-disable no-proto */
  expect(typeof parkingSystem.__proto__.addCar === 'function').toBeTruthy();
});

test('ParkingSystem\'s prototype has addCar method', () => {
  expect(typeof ParkingSystem.prototype.addCar === 'function').toBeTruthy();
});

test('ParkingSystem\'s prototype has addCar method', () => {
  expect(typeof ParkingSystem.prototype.addCar === 'function').toBeTruthy();
});

test('ParkingSystem\'s instance has correct attributes', () => {
  const parkingSystem = new ParkingSystem(1, 2, 3);
  expect(parkingSystem.big).toBe(1);
  expect(parkingSystem.medium).toBe(2);
  expect(parkingSystem.small).toBe(3);
});

test('ParkingSystem\'s instance addCar function', () => {
  const parkingSystem = new ParkingSystem(1, 2, 3);
  expect(parkingSystem.addCar(1)).toBeTruthy();
  expect(parkingSystem.addCar(1)).toBeFalsy();

  expect(parkingSystem.addCar(2)).toBeTruthy();
  expect(parkingSystem.addCar(2)).toBeTruthy();
  expect(parkingSystem.addCar(2)).toBeFalsy();

  expect(parkingSystem.addCar(3)).toBeTruthy();
  expect(parkingSystem.addCar(3)).toBeTruthy();
  expect(parkingSystem.addCar(3)).toBeTruthy();
  expect(parkingSystem.addCar(3)).toBeFalsy();
});
