const assert = require('chai').assert;
const tail   = require('../tail');

describe("tail gets all but the first element of the array", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns ["labs", "bootcamp"] for ["lighthouse", "labs", "bootcamp"]', () => {
    assert.deepEqual(tail(["lighthouse", "labs", "bootcamp"]), ["labs", "bootcamp"]); 
  });
});




// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"