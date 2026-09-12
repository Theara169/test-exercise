const reverseString = require("../exercises/exercise03");

test("Case 1: hello → olleh", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("Case 2: javascript → tpircsavaj", () => {
    expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("Case 3: abc → cba", () => {
    expect(reverseString("abc")).toBe("cba");
});