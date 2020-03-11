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

module.exports = flatten;
