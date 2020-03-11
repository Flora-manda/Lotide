let findKey = function(object, callback) {
  let final = "";
  for (let key in object) {
    if (callback(object[key])) {
      final = key;
      break;
    }
    else if (callback(object[key]) === undefined) {
      return undefined;
    }
  }
  return final;
}

module.exports = findKey;



