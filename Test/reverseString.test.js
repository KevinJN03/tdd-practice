const reverseString = require("../Function/reverseString");

test(`kevin should equal to nivek`, () => {
    expect(reverseString("kevin")).toBe("nivek")
})

test(`karen should equal to nerak`, () => {
    expect(reverseString("karen")).toBe("nerak")
})

test(`adam should equal to mada`, () => {
    expect(reverseString("adam")).toBe("mada")
})