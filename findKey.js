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



let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 2 }
}, x => x.stars === 2);

console.log(result1);



//-----------------TEST CODE-------------------------
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//-----------------TEST CODE-------------------------


assertEqual(result1, "noma");