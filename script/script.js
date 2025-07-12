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

//to display on screen
buttons.forEach(button => {
    button.addEventListener("click", () => {
        //to clear display
        if (shouldClearDisplay) {
            displayContent = "";
            display.textContent = displayContent;
        }
        //to append to display
        display.textContent += button.textContent;
        displayContent = display.textContent;

    })
});

// to get a, b, and operator 
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        displayContent = parseFloat(display.textContent);

        //check if a is empty ...if yes...give a the display value
            if (a === null) {
                a = displayContent;
                operator = value;
                shouldClearDisplay = true;
            }

            //check if operator was clicked and if b is empty...then gives b the current display value 
            //and then calls the operate function and assign return value to a 
            else if (operator && b === null) {
                b = displayContent;
                a = operate(a, b, operator);
                display.textContent = a;
                b = null;
                operator = value;
                shouldClearDisplay = true;
            }

            //checks is only operator was clicked
            else {
                operator = value;
            }
    })
});
