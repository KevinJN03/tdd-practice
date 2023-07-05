//A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

class Calculator {
 constructor(num1= null, num2= null){
    this.num1 =num1,
    this.num2 =  num2
 }

 add(num1, num2){
    return num1 + num2
 }

 divide(num1, num2){
    return num1 / num2
 }

 subtract(num1, num2){
    return num1 - num2
 }

 multiply(num1, num2){
    return num1 * num2
 }
}

// let calc = new Calculator();
// console.log(calc.add(2,5))
module.exports.Calculator = Calculator