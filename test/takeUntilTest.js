const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeuntil", () => {

  it("Should return a new array uptil a certain point defined by the callback function", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });

});