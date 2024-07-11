// importing the functions needed for calculator
const calculator_logic = require('./calculator_function');
// importing readline library to take input from users using console
const readline = require('readline-sync');

console.log("Calculator testing with mocha");
var a, b, operation;
// Taking the input for first number till correct formate is entered
do {
    a = readline.question("Enter first number: ");
        
    if (calculator_logic.numberValidator(a)) {
        break;
    }
    else {
        console.log("Invalid Number");
    }

} while (true);

// Taking the input for second number till correct formate is entered
do {
    b = readline.question("Enter second number: ");

    if (calculator_logic.numberValidator(b)) {
        break;
    }
    else
    {
        console.log("Invalid Number");
    }
} while (true);


operation = readline.question(
    `
  Please operation to perform:
  1) Addition (+)
  2) Subtraction (-)
  3) Multiplication (*)
  4) Division (/)
  Enter the number before the operation to select: `);

while (operation != "1" && operation != "2" && operation != "3" && operation != "4") {
    operation = readline.question("Enter a valid operator: ");
};

// switch case selects the correct function to call for the calculator
switch (operation) {
    case "1":
        console.log(`The addition of ${a} and ${b} is ${calculator_logic.add(a, b)}.`)
        break;
    case "2":
        console.log(`The subtraction of ${a} and ${b} is ${calculator_logic.subtract(a, b)}.`)
        break;
    case "3":
        console.log(`The multiplication of ${a} and ${b} is ${calculator_logic.multiply(a, b)}.`)
        break;
    case "4":
        console.log(`The division of ${a} and ${b} is ${calculator_logic.divide(a, b)}.`)
        break;

    default:
        console.log("Validate you input and try again!")
        break;
};