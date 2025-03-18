let result = 0;
let decCount = 0

let term = 0;
let num = [0, 0];

let operator = "";
let operatorCount = 0;

let tempNum = "";

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector('#six');
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const clear = document.querySelector('#clear');
const posNeg = document.querySelector("#posNeg");
const percentage = document.querySelector("#percentage");
const divsion = document.querySelector("#division");

const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

const resultText = document.querySelector("#resultText");

divsion.onclick = divide;
multiplication.onclick = multiply;
subtraction.onclick = subtract;
addition.onclick = add;

clear.onclick = clearFunc;
posNeg.onclick = posNegFunc;
percentage.onclick = percentageFunc;
decimal.onclick = decimalFunc;

function updateTerm() {
    term += 1;
    tempNum = "";
}

function updateNum(digit) {
    tempNum += digit;
    resultText.innerText = tempNum;
    num[term % 2] = tempNum;
    //console.log(num);
}

function clearFunc() {
    num = ["", ""];
    resultText.innerText = "0";
    term = 0;
    tempNum = "";
    operatorCount = 0;
}

function clearTerm() {
    tempNum = "";
}

function posNegFunc() {
    num[term % 2] = num[term % 2] * -1;
    resultText.innerText = num[term % 2];
}

function percentageFunc() {
    num[term % 2] = num[term % 2] / 100;
    resultText.innerText = num[term % 2];
}

function decimalFunc() {
    if (decCount === 0) {
        updateNum(".");
    }
    decCount += 1;
}


function add() {
    updateTerm();
    resultText.innerText = "0";

    if (operatorCount > 0) {
        equate(operator);
        term = 1;
    }

    operator = "+";
    operatorCount += 1;
    //console.log(operator);
    //console.log(num);
}

function subtract() {
    updateTerm();
    resultText.innerText = "0";

    if (operatorCount > 0) {
        equate(operator);
        term = 1;
    }

    operator = "-";
    operatorCount += 1;
    //console.log(operator);
    //console.log(num);
}

function multiply() {
    updateTerm();
    resultText.innerText = "0";

    if (operatorCount > 0) {
        equate(operator);
        term = 1;
    }

    operator = "*";
    operatorCount += 1;
    //console.log(operator);
    //console.log(num);
}

function divide() {
    updateTerm();
    resultText.innerText = "0";

    if (operatorCount > 0) {
        equate(operator);
        term = 1;
    }

    operator = "/";
    operatorCount += 1;
    //console.log(operator);
    //console.log(num);
}

function equate(operator) {
    if (operator === "+") {
        result = Number(num[0]) + Number(num[1]);
        resultText.innerText = result;
    }
    else if (operator === "-") {
        result = Number(num[0]) - Number(num[1]);
        resultText.innerText = result;
    }
    else if (operator === "*") {
        result = Number(num[0]) * Number(num[1]);
        resultText.innerText = result;
    }
    else if (operator === "/") {
        result = Number(num[0]) / Number(num[1]);
        resultText.innerText = result;
    }

    if (operatorCount > 0) {
        term += 1;
    }

    num = [result, 0];
    operatorCount = 0;
    //console.log(num);
    tempNum = "";
}

