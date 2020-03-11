const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("Should return the position of a letter in a word", () => {
    let result1 = letterPositions("hello");
    assert.deepEqual(result1["h"], [0]);
  });

});

