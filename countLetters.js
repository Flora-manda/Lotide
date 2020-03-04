const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const result1 = countLetters("Hello My Dear");
assertEqual(result1["H"], 1);