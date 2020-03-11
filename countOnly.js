// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  
  for (let items of allItems) {
    if (itemsToCount[items]) {
      if (results[items]) {
        results[items] += 1;
      } else {
        results[items] = 1;
      }
    }
  }
  return results;
}

module.exports = countOnly;


