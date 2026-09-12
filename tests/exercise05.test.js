const countVowels = require("../exercises/exercise05");

test("Case 1: hello → 2", () => {
    expect(countVowels("hello")).toBe(2);
});

test("Case 2: javascript → 3", () => {
    expect(countVowels("javascript")).toBe(3);
});

test("Case 3: sky → 0", () => {
    expect(countVowels("sky")).toBe(0);
});