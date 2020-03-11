const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("Should return true if both objects have identical keys with identical values.", () => {
    let testOne = {a: 1, b: [2, 4]};
    let testTwo = {a: 1, b: [2, 4]};
    assert.strictEqual(eqObjects(testOne, testTwo), true);
  });

  it("Should return false if both objects does not have identical keys with identical values.", () => {
    let testOne = {a: 1, b: [2, 4]};
    let testTwo = {a: 1, b: [2, 3]};
    assert.strictEqual(eqObjects(testOne, testTwo), false);
  });

});
