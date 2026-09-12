const countOccurrences = require("../exercises/exercise09");

test("Case 1: [1, 2, 2, 3] → {1: 1, 2: 2, 3: 1}", () => {
    expect(countOccurrences([1, 2, 2, 3])).toEqual({
        1: 1,
        2: 2,
        3: 1
    });
});

test("Case 2: [5, 5, 5, 10] → {5: 3, 10: 1}", () => {
    expect(countOccurrences([5, 5, 5, 10])).toEqual({
        5: 3,
        10: 1
    });
});

test("Case 3: [1, 1, 1, 2, 2] → {1: 3, 2: 2}", () => {
    expect(countOccurrences([1, 1, 1, 2, 2])).toEqual({
        1: 3,
        2: 2
    });
});