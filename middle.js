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

module.exports = middle;
