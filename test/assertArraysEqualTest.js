const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');


describe("#assertArraysEqual", () => {

  it("should return true when comparing two arrays", () => {
    assert.deepEqual(assertArraysEqual([2, 3], [2, 3]), `✅✅✅ Assertion Passed: 2,3 === 2,3`);
  })

  it("should return false when comparing two arrays", () => {
    assert.deepEqual(assertArraysEqual([2, 4], [2, 3]), `❌❌❌ Assertion Failed: 2,4 !== 2,3`);
  })

});