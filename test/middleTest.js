const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("should return the middle item in an array", () => {
    const words = [1, 2, 3, 4];
    const result = middle(words);
    assert.deepEqual(result, [2, 3]);
  });

});