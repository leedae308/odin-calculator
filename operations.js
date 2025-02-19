let variable1;
let variable2;
let operator;

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}



function operate(variable1, variable2, operator) { 
    switch(toString(operator)){
        case "+": return parseFloat(add(variable1, variable2));
        case "-": return subtract(variable1, variable2);
        case "*": return multiply(variable1, variable2);
        case "/": return divide(variable1, variable2);
        default: return "hello"
    }
    return;
}

let try1 = "+";


console.log(operate((1, 3, "-")));