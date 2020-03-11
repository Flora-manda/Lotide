const takeUntil = function(array, callback) {
  let final = [];
  for (let items of array) {
    final.push(items);
    if (callback(items)) {
      final.pop(items);
      break;
    }
  }
  return final;
}

module.exports = takeUntil;

