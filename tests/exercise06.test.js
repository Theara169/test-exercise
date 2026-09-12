const sumArray = require("../exercises/exercise06");

test("Case 1: [1, 2, 3] → 6", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
});

test("Case 2: [10, 20, 30] → 60", () => {
    expect(sumArray([10, 20, 30])).toBe(60);
});

test("Case 3: [-5, 5, 10] → 10", () => {
    expect(sumArray([-5, 5, 10])).toBe(10);
});