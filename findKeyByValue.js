const findKeyByValue = function(myObject, myValue) {
  let result = "";
  for (let key in myObject) {
      if (myObject[key] === myValue) {
        result = key;
      }
      else {
        result = undefined;
      }
    }
    return result;
  };

module.exports = findKeyByValue;