const display = document.querySelector(".screen");
const numbers = document.querySelectorAll(".cyan");
const smallDisplay = document.querySelector(".smallDisplay");

// const calculator = document.querySelector(".calculator");
let cleared = true;
let smallDisplayCleared = true;
let numPressed = false;
let dotCount = false;

numbers.forEach((num) => {
    num.addEventListener("click", function () {
        if (!cleared) {
            display.textContent = "";
            cleared = true;
            // smallDisplay.textContent = "";
            if (smallDisplayCleared == false) {
                smallDisplay.textContent = "";
                smallDisplayCleared = true;
            }
        }
        if (num.textContent == '.') {
            if (!dotCount) {
                display.textContent += num.textContent;
                dotCount = true;
            }
        }
        else {
            display.textContent += num.textContent;
        }
        numPressed = true;
    })
    num.addEventListener("mouseup", (event) => {
        num.style.opacity = "1";
    })
    num.addEventListener("mousedown", (event) => {
        num.style.opacity = "0.5";
    })
})


const operators = document.querySelectorAll(".orange.operator");
operators.forEach((oper) => {
    oper.addEventListener("click", function () {
        if (variable1 == null) {
            variable1 = display.textContent;
            numPressed = false;
            dotCount=false;
        }
        else {
            smallDisplay.textContent = "";
            smallDisplayCleared = true;

            if (operator != null) {
                // console.log("operator null has been called");
                // console.log("variable1 : " + variable1 + " operator : " + operator + " variable2 : " + variable2);
                if (numPressed) {
                    variable2 = display.textContent;
                    numPressed = false;
                    dotCount=false;
                }

                if (variable2 != null) {
                    console.log("variable null has been called");
                    display.textContent = operate(variable1, variable2, operator);
                    console.log("variable1 : " + variable1 + " operator : " + operator + " variable2 : " + variable2);
                }

            }
        }
        variable1 = display.textContent;

        operator = oper.textContent;
        cleared = false;
        smallDisplay.textContent += variable1 + " " + operator;
    })

    oper.addEventListener("mouseup", (event) => {
        oper.style.opacity = "1";
    })
    oper.addEventListener("mousedown", (event) => {
        oper.style.opacity = "0.5";
    })
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
    display.textContent = "";
    smallDisplay.textContent = "";
    init();
    dotCount = false;

});
clear.addEventListener("mouseup", (event) => {
    clear.style.opacity = "1";
});
clear.addEventListener("mousedown", (event) => {
    clear.style.opacity = "0.5";
});

const equal = document.querySelector("#equal.orange");
equal.addEventListener("click", function () {
    // display.textContent="";
    variable2 = display.textContent;
    // console.log(typeof (variable1), variable2, typeof (operator));
    if (variable1 == null) {
        display.textContent = variable2;
    }
    else {
        display.textContent = operate(variable1, variable2, operator);
        smallDisplay.textContent += " " + variable2;
    }
    init();
    variable1 = display.textContent;
    cleared = false;
    smallDisplayCleared = false;
    dotCount=false;
});
equal.addEventListener("mouseup", (event) => {
    equal.style.opacity = "1";
});
equal.addEventListener("mousedown", (event) => {
    equal.style.opacity = "0.5";
});

const revert = document.querySelector("#revert.blue");
revert.addEventListener("click", function () {
    if (display.textContent != "")
        display.textContent *= (-1);
});
revert.addEventListener("mouseup", (event) => {
    revert.style.opacity = "1";
});
revert.addEventListener("mousedown", (event) => {
    revert.style.opacity = "0.5";
});

const percent = document.querySelector("#percent.blue");
percent.addEventListener("click", function () {
    if (display.textContent != "") {
        display.textContent *= 0.01;
        dotCount = true;
    }

});
percent.addEventListener("mouseup", (event) => {
    percent.style.opacity = "1";
});
percent.addEventListener("mousedown", (event) => {
    percent.style.opacity = "0.5";
});



