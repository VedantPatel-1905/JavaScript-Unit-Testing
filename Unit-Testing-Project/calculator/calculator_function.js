// function for operations to add, subtract, multiply, divide
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0){
        return "Zero Division";
    }
    return a / b;
}

// constant for validating the numbers
const numberValidator = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return false
    }
    return true
}

// importing the function
module.exports = {
    add, subtract, divide, multiply, numberValidator
}