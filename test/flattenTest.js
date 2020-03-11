const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("Should return a flattened nested array", () => {
    const listOfArray = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(listOfArray), [1, 2, 3, 4, 5, 6]);
  });

});
