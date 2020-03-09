const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return tail of a new array minus the first element", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.length, 2);
  });

});
