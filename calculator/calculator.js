// Global Varialbe
let stored_num = 0;
let current_num = "0";
let current_operation = "";
let display = document.getElementById("display");

/*************************
 * pressNum
 * input: number clicked
 * output: display number
 *************************/
function pressNum(digit) {
    current_num += digit;
    display.innerHTML = parseFloat(current_num);
}

/*************************
 * pressKeyClear
 * output: reset to default
 *************************/
function pressKeyClear() {
    stored_num = 0;
    current_num = "0";
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
    stored_num = parseFloat(current_num);
    current_num = "0";
}

/*************************
 * pressKeyEqual
 * input: number clicked
 * output: display number
 *************************/
function pressKeyEqual() {
    let current_num_f = parseFloat(current_num);
    if (current_operation == "+") {
        current_num = stored_num + current_num_f + "";
    }
    if (current_operation == "-") {
        current_num = stored_num - current_num_f + "";
    }
    if (current_operation == "*") {
        current_num = stored_num * current_num_f + "";
    }
    if (current_operation == "/") {
        current_num = stored_num / current_num_f + "";
    }
    if (current_operation == "EE") {
        current_num = stored_num * Math.pow(10, parseFloat(current_num));
    }
    stored_num = 0;
    current_operation = "";
    display.innerHTML = parseFloat(current_num);
}

/*********************************
 * pressKeyDecimal
 * input: n/a
 * output: add decimal to number
 **********************************/
function pressKeyDecimal() {
    if (current_num.indexOf(".") == -1) {
        current_num = parseFloat(current_num) + ".";
        display.innerHTML = current_num;
    }
}

/******************************************
 * pressKeyPi
 * input: n/a
 * output: if current number is 0 show pi
 * else show product with pi
 ******************************************/
function pressKeyPi() {
    if (parseFloat(current_num) === 0) {
        current_num = Math.PI + "";
    } else {
        current_num = parseFloat(current_num) * Math.PI + "";
    }
    display.innerHTML = parseFloat(current_num);
}

/**
 * pressKeyTrig
 * input: sin/cos
 * output: result of sin/cos(rad)
 */
function pressKeyTrig(operation) {
    if (operation == "sin") {
        current_num = Math.sin(parseFloat(current_num)) + "";
    }
    if (operation == "cos") {
        current_num = Math.cos(parseFloat(current_num)) + "";
    }
    display.innerHTML = parseFloat(current_num);
}