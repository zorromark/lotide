const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
};






const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  romantic: "Grey's Anatomy"
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Buffy"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "romantic");
