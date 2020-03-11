const countLetters = function (sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letters = sentence[i];
    if (sentence.charAt(i) !=  " ") {
      if (result[letters]) {
        result[letters] +=1;
      }
      else {
        result[letters] = 1;
      }
    }
  }
  return(result);
};


module.exports = countLetters;