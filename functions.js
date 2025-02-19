const display = document.querySelector(".screen")
const numbers = document.querySelectorAll(".cyan");
const calculator = document.querySelector(".calculator");

numbers.forEach((num)=>{
    num.addEventListener("click", function(){
        display.textContent+=num.textContent;
        // calculator.appendChild(display);
    })
})