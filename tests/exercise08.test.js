const findLongestWord = require("../exercises/exercise08");

test("Case 1: ['cat', 'elephant', 'dog'] → elephant", () => {
    expect(findLongestWord(["cat", "elephant", "dog"])).toBe("elephant");
});

test("Case 2: ['JavaScript', 'C', 'Python'] → JavaScript", () => {
    expect(findLongestWord(["JavaScript", "C", "Python"])).toBe("JavaScript");
});

test("Case 3: ['apple', 'banana', 'kiwi'] → banana", () => {
    expect(findLongestWord(["apple", "banana", "kiwi"])).toBe("banana");
});