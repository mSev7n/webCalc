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

let a = 0;
let b = 0;
let operator;

function operate(a, b, operator){
    let operation = operations[operator];
    return operation(a, b);
}