const {Calculator} = require("../Function/calculator.js");
const calc = new Calculator
test(`add 2 + 3 = 5`, () => {
  expect(calc.add(2, 3)).toBe(5);
});

test(`subtract 10 - 5 = 5`, () => {
  expect(calc.subtract(10, 5)).toBe(5);
});

test(`divide 10 / 5 = 2`, () => {
  expect(calc.divide(10, 5)).toBe(2);
});

test(`multiple 10 x 5 = 50`, () => {
  expect(calc.multiply(10, 5)).toBe(50);
});
