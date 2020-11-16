let facts = ["aaaaaaaa", "bbbbbbbbb", "cccccccccc"];
let current_fact = 0;

displayFact("fact");

function displayFact(id) {
    document.getElementById(id).innerHTML = facts[current_fact];
    if (current_fact >= facts.length - 1) {
        current_fact = 0;
    } else {
        current_fact++;
    }
}

function updateWebpage() {
    let n = document.getElementById("fib-length").value;
    if (n > 1000) {
        return document.getElementById("fib-length").value = "Too much!"
    }
    displayFibSequence(n, "sequence");
    displayGoldenRatio(n, "golden-ratio");
}

/*
* fib_sequence
*input: n is the number of the fibonacci numbers we will find
*output: list of the first n fibonacci numbers
*/
function getFibSequence(n) {
    let seq = [];
    let i;
    let current_number;

    if (n == 0) return seq;
    seq.push(0);
    if (n == 1) return seq;
    seq.push(1);

    for (i = 2; i < n; i++) {
        current_number = seq[i - 2] + seq[i - 1];
        seq.push(current_number);
    }
    return seq;
}

function displayFibSequence(n, div_id) {
    let fib = getFibSequence(n);
    document.getElementById(div_id).innerHTML = fib.join(", ");
}

function getGoldenRatio(n) {
    let f = getFibSequence(n);
    if (n < 2) return 0;
    return f[f.length - 1] / f[f.length - 2];
}

function displayGoldenRatio(n, div_id) {
    let gr = getGoldenRatio(n);
    document.getElementById(div_id).innerHTML = gr;
}