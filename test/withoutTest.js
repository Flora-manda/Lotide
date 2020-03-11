const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("Should return a new array without a specified value", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

});