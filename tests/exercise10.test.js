const isPalindrome = require("../exercises/exercise10");

test("Case 1: madam → true", () => {
    expect(isPalindrome("madam")).toBe(true);
});

test("Case 2: level → true", () => {
    expect(isPalindrome("level")).toBe(true);
});

test("Case 3: hello → false", () => {
    expect(isPalindrome("hello")).toBe(false);
});