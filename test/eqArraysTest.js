const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("Should return true if both arrays have identical keys with identical values.", () => {
    let testOne = [1, 2, 3];
    let testTwo = [1, 2, 3];
    assert.strictEqual(eqArrays(testOne, testTwo), true);
  });

  it("Should return false if both arrays does not have identical keys with identical values.", () => {
    let testOne = [1, 2, 3];
    let testTwo = [1, 2, 4];
    assert.strictEqual(eqArrays(testOne, testTwo), false);
  });

});

