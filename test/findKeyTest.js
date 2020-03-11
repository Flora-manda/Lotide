const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  it("Should return key assigned to value (truthy or falsey) specified by the callback function", () => {
    let result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 2 }
  }, x => x.stars === 2);
    assert.strictEqual(result1, "noma");

  });

});
