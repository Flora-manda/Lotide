const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed`);
    return `✅✅✅ Assertion Passed`;
  } else {
    console.log(`❌❌❌ Assertion Failed`);
    return `❌❌❌ Assertion Failed`;
  }
};


module.exports = assertObjectsEqual;