const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1);
  } else if (array.length < 1) {
    return [];
  }
};



module.exports = tail;