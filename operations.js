variable1 = null;
variable2 = null;
operator = null;


function init() {
    variable1 = null;
    variable2 = null;
    operator = null;
}


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return parseFloat((num1 * num2).toFixed(6));
}
function divide(num1, num2) {
    return (num2 != 0) ? parseFloat((num1 / num2).toFixed(6)) : NaN;
}

function operate(variable1, variable2, operator) {
    switch (operator) {
        case "+": return add(+variable1, +variable2);
        case "−": return subtract(+variable1, +variable2);
        case "×": return multiply(+variable1, +variable2);
        case "÷": return divide(+variable1, +variable2);
        // case "=": return 0;
        default: return "ERROR";
    }
}
// console.log(operate(3, 4, "*"))