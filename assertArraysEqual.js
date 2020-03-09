const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertArraysEqual;
