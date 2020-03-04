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


const middle = function(array) {
  if (array.length === 1 && array.length === 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    let resultOdd = Math.floor(array.length / 2);
    return array[resultOdd];
  } else if (array.length % 2 === 0) {
    let secondEven = Math.floor(array.length / 2);
    let firstEven = secondEven - 1;
    return array.slice(firstEven, secondEven + 1);
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);