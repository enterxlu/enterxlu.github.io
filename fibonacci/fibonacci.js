/*
fib_sequence
input: n is the number of the fibonacci numbers we will find
output: list of the first n fibonacci numbers
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

console.log(getFibSequence(10));

function displaySequence(n, div_id) {
    let fib = getFibSequence(n);
    document.getElementById(div_id).innerHTML = fib.join(", ");
}

displaySequence(42, "sequence");