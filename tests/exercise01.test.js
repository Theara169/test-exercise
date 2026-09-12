const add = require("../exercises/exercise01");

test("  Case 1: 1+3=4 ", () => {
    expect(add(1,3)).toBe(4);
    
});
test("Case2 : 3+5=8",()=>{
    expect(add(3,5)).toBe(8);
})

test("Case #: 6+8=14",()=>{
    expect(add(6,8)).toBe(14);
})