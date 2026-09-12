const findLargest = require("../exercises/exercise02");

test("Case 1: [1, 5, 3] → 5", () => {
    expect(findLargest([1, 5, 3])).toBe(5);
});

test("Case 2: [10, 20, 7] → 20", () => {
    expect(findLargest([10, 20, 7])).toBe(20);
});

test("Case 3: [-5, -2, -10] → -2", () => {
    expect(findLargest([-5, -2, -10])).toBe(-2);
});