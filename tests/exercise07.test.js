const removeDuplicates = require("../exercises/exercise07");

test("Case 1: [1, 2, 2, 3] → [1, 2, 3]", () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test("Case 2: [5, 5, 5, 10] → [5, 10]", () => {
    expect(removeDuplicates([5, 5, 5, 10])).toEqual([5, 10]);
});

test("Case 3: [1, 1, 2, 2, 3, 3] → [1, 2, 3]", () => {
    expect(removeDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});