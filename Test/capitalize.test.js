const capitalize = require("../Function/capitalize")

test(`capitalize kevin to equal Kevin`, () => {
    expect(capitalize("kevin")).toBe("Kevin");
})

test(`capitalize avin to equal avin`, () => {
    expect(capitalize("avin")).toBe("Avin");
})

test(`capitalize sam to equal sam`, () => {
    expect(capitalize("sam")).toBe("Sam");
})