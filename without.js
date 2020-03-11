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

module.exports = without;
