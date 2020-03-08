//----------------------------------TEST CODE------------------------------------------
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//----------------------------------TEST CODE------------------------------------------

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[i] === itemsToRemove[y]) {
      source.splice(i, 1);
      return source;
      }
    }
  }
  return false;
};

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);