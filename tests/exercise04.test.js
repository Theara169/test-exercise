const isEven = require("../exercises/exercise04");

test("Case 1: 4 is even", () => {
    expect(isEven(4)).toBe(true);
});

test("Case 2: 7 is not even", () => {
    expect(isEven(7)).toBe(false);
});

test("Case 3: 10 is even", () => {
    expect(isEven(10)).toBe(true);
});