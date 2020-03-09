const assert = require('chai').assert;
const assertObjectsEqual= require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {

  it("should compare two objects and returns true if they are equal", () => {
    let testOne = {a: 1, b: [2, 5]};
    let testTwo = {a: 1, b: [2, 5]};
    assert.deepEqual(assertObjectsEqual(testOne, testTwo), `✅✅✅ Assertion Passed: ${testOne} === ${testTwo}`);
  })

  it("should compare two objects and returns false if they are not equal", () => {
    let testOne = {a: 1, b: [2, 5]};
    let testTwo = {a: 1, b: [2, 4]};
    assert.deepEqual(assertObjectsEqual(testOne, testTwo), `❌❌❌ Assertion Failed: ${testOne} === ${testTwo}`);
  })

});
