let sequence = [];
let type;
let length;
let term1;
let term2;
let term3;
let term4;
let d1;
let d2;
let d3;
let r1;
let r2;
let r3;

function runProgram() {
    sequence = [];
	document.getElementById("series").innerHTML = "";
	document.getElementById("sequence").innerHTML = "";
    getTerms();
    checkType();
    createSequence();
    sumSeries();
}

function getTerms() {
    length = document.getElementById("length_of_sequence").value;
    term1 = document.getElementById("term1").value;
    term2 = document.getElementById("term2").value;
    term3 = document.getElementById("term3").value;
    term4 = document.getElementById("term4").value;
}

function checkType() {
    d1 = term2 - term1;
    d2 = term3 - term2;
    d3 = term4 - term3;
    r1 = term2 / term1;
    r2 = term3 / term2;
    r3 = term4 / term3;

    if(d1 == d2 && d2 == d3) {
        type = "A";
        document.getElementById("type").innerHTML = "Arithmetic Sequence";
    } else if(r1 == r2 && r2 == r3) {
        type = "G";
        document.getElementById("type").innerHTML = "Geometric Sequence";
    } else {
        type = "N";
        document.getElementById("type").innerHTML = "Not Arithmetic or Geometric Sequence";
    }
}

function createSequence() {
    let term_now = parseFloat(term1);
    if(type == "A") {
        for(let i = 0; i < length; i++) {
            sequence[i] = term_now;
            term_now = term_now + d1;
        }
    } else if(type == "G") {
        for(let i = 0; i < length; i++) {
            sequence[i] = term_now;
            term_now = term_now * r1;
        }
    }
    document.getElementById("sequence").innerHTML = sequence.join(", ");
}

function sumSeries() {
    let sum = 0;
    for(let i = 0; i < sequence.length; i++) {
        sum = sum + sequence[i];
    }
    if(type != "N") {
        document.getElementById("series").innerHTML = sequence.join(" + ") + " = " + sum;
    }
}

function getFormula(){
	
}