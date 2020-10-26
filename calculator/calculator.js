let stored_num = 0;
let current_num = 0;
let current_operation = "";
let display = document.getElementById("display");

/*************************
 * pressNum
 * input: number clicked
 * output: display number
 *************************/
function pressNum(digit) {
    current_num *= 10;
    current_num += digit;
    display.innerHTML = current_num;
}

/*************************
 * pressKeyClear
 * output: reset to default
 *************************/
function pressKeyClear() {
    stored_num = 0;
    current_num = 0;
    current_operation = "";
    display.innerHTML = current_num;
}

/*************************
 * pressKey
 * input: operation clicked
 * output: set current_operation as operation and press Equal
 *************************/
function pressKey(operation) {
    pressKeyEqual();
    current_operation = operation;
    stored_num = current_num;
    current_num = 0;
}

/*************************
 * pressKeyEqual
 * input: number clicked
 * output: display number
 *************************/
function pressKeyEqual() {
    function reset() {
        stored_num = 0;
        current_operation = "";
    }
    if (current_operation == "+") {
        current_num += stored_num;
        reset();
    }
    if (current_operation == "-") {
        current_num = stored_num - current_num;
        reset();
    }
    if (current_operation == "*") {
        current_num *= stored_num;
        reset();
    }
    if (current_operation == "/") {
        current_num = stored_num / current_num;
        reset();
    }
    display.innerHTML = current_num;
}

/**
 * check if the digit is too much to be shown
 */
window.setInterval(function () {
    if (display.innerHTML.length > 9) {
        alert("Digit overflow");
        pressKeyClear();
    }
}, 300);