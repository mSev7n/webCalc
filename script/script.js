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
    return b === 0 ? "ERROR" : a / b;
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

let displayContent = "";

function operate(a, b, operator){
    let operation = operations[operator];
    return (operation(a, b));
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".digits");
const allButtons = document.querySelectorAll(".operations");

//to display on screen
buttons.forEach(button => {
    button.addEventListener("click", () => {
        //prevent multiple decimals in one number
        if (button.textContent === "." && display.textContent.includes(".")) return;

        //to clear display
        if (shouldClearDisplay) {
            displayContent = "";
            display.textContent = "";
            shouldClearDisplay = false;
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

        //ignore operator click if display is empty
        if (display.textContent === "") return;

        //check if a is empty ...if yes...give a the display value
            if (a === null && display.textContent != "") {
                a = parseFloat(displayContent);
                operator = value;
                shouldClearDisplay = true;
            }
            else if (shouldClearDisplay) {
                operator = value;
            }

            //check if operator was clicked and if b is empty...then gives b the current display value 
            //and then calls the operate function and assign return value to a 
            else if (operator && b === null) {
                if (a !== "") {
                    b = parseFloat(displayContent);
                    a = operate(a, b, operator);
                    display.textContent = a;
                    b = null;
                    operator = value;
                    shouldClearDisplay = true;
                }
            }

            //checks is only operator was clicked
            else {
                operator = value;
            }

            //ignore operator click if display is empty
            if (display.textContent === "") return;
    })
});

const special = document.querySelectorAll(".special");
special.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            // Only calculate if we have a valid a and operator
            if (a !== null && operator !== null) {
                b = parseFloat(display.textContent);
                a = operate(a, b, operator);
                display.textContent = a;
                // Reset operator & b but keep a for next op
                operator = null;
                b = null;
                a = null;
                shouldClearDisplay = true;
            }
        }
        if (button.textContent === "C") {
            a = null;
            b = null;
            operator = null;
            displayContent = "";
            display.textContent = "";
            shouldClearDisplay = false;
        }
        if (button.textContent === "<X") {
            if (!shouldClearDisplay && display.textContent.length > 0) {
                display.textContent = display.textContent.slice(0, -1);
                displayContent = display.textContent;
            }
        }
    })
})