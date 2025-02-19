let variable1=null;
let variable2=null;
let operator=null;


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
    return (num2!=0) ? num1/num2 : NaN;
}

function operate(variable1, variable2, operator) { 
    switch(operator){
        case "+": return add(+variable1, +variable2);
        case "−": return subtract(+variable1, +variable2);
        case "×": return multiply(+variable1, +variable2);
        case "÷": return divide(+variable1, +variable2);
        default: return "ERROR"
    }
    return;
}


// console.log(operate(3, 4, "*"))