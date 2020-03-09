const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {

  it("should compare two values that are not arrays and return true", () => {
    assert.deepEqual(assertEqual(1, 1), `✅✅✅ Assertion Passed: 1 === 1`);
  })

  it("should compare two values that are not arrays and return false", () => {
    assert.deepEqual(assertEqual("Hello", "Hi"), `❌❌❌ Assertion Failed: Hello !== Hi`);
  })

});

