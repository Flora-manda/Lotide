const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("Should return a new modified array based on a callback funtion", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const callback = map(words, word => word.toUpperCase());
    assert.deepEqual(callback, ["GROUND", "CONTROL", "TO","MAJOR", "TOM"]);
  });

});
