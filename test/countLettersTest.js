const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe("#countLetters", () => {

  it("Should return the count of letters present in a sentence", () => {
    const result1 = countLetters("Hello My Dear");
    assert.strictEqual(result1["H"], 1);
  });

});

