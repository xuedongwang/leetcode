
/**
 * @ref: https://leetcode-cn.com/problems/design-parking-system/
 */

const ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
}

ParkingSystem.prototype.addCar = function(carType) {
  switch (carType) {
    case 1:
      this.big --;
      return this.big >= 0;
    case 2:
      this.medium --;
      return this.medium >= 0;
    case 3:
      this.small --;
      return this.small >= 0
  }
};

module.exports = ParkingSystem;
