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

const flatten = function(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (Array.isArray(myArray[i])) {
      return myArray.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        []
      );
    }
  }
  return false;
};

const listOfArray = [1, 2, [3, 4], 5, [6]];
flatten(listOfArray);
assertArraysEqual(flatten(listOfArray), [1, 2, 3, 4, 5, 6]);
