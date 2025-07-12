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
    return b === 0 ? "CAN'T DIVIDE BY ZERO" : a / b;
}

const operations = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide
};

let a = null;
let b = null;
let operator = null;
let shouldClearDisplay = false;

let displayContent = null;

function operate(a, b, operator){
    let operation = operations[operator];
    return operation(a, b);
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".digits");

const allButtons = document.querySelectorAll(".operations");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldClearDisplay) {
            displayContent = "";
            display.textContent = displayContent;
        }
        display.textContent += button.textContent;
        displayContent = display.textContent;

    })
});

allButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        displayContent = parseFloat(display.textContent);

            if (a === null) {
                a = displayContent;
                operator = value;
                shouldClearDisplay = true;
            }
            else if (operator && b === null) {
                b = displayContent;
                a = operate(a, b, operator);
                display.textContent = a;
                b = null;
                operator = value;
                shouldClearDisplay = true;
            }
            else {
                operator = value;
            }
    })
});
