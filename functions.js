const display = document.querySelector(".screen");
const numbers = document.querySelectorAll(".cyan");
const smallDisplay = document.querySelector(".smallDisplay");

// const calculator = document.querySelector(".calculator");
let cleared = true;

numbers.forEach((num) => {
    num.addEventListener("click", function () {
        if (!cleared) {
            display.textContent = "";
            cleared = true;
            // smallDisplay.textContent = "";
        }
        display.textContent += num.textContent;
        // calculator.appendChild(display);
        // console.log(cleared);
    })
})


const operators = document.querySelectorAll(".orange.operator");
operators.forEach((oper) => {
    oper.addEventListener("click", function () {
        variable1 = display.textContent;
        operator = oper.textContent;
        cleared = false;
        smallDisplay.textContent += variable1 + " " + operator;
        // console.log(variable1);
        // console.log(operator);
    })
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
    display.textContent = "";
    variable1 = null;
    variable2 = null;
    operator = null;
});

const equal = document.querySelector("#equal.orange");
equal.addEventListener("click", function () {
    // display.textContent="";
    variable2 = display.textContent;
    // console.log(typeof (variable1), variable2, typeof (operator));
    display.textContent = operate(variable1, variable2, operator);
    smallDisplay.textContent+= " " + variable2;
    variable1 = null;
    variable2 = null;
    operator = null;
    cleared = false;
});

