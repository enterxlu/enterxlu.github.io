let list_of_numbers = [];

function getListOfNumber() {
    let n = document.getElementById("list-length").value;
    let next_number = 0;
    let range = Math.floor(Math.random() * n + 10);

    list_of_numbers = [];

    for (let i = 0; i < n; i++) {
        next_number += Math.floor(Math.random() * range);
        list_of_numbers.push(next_number);
    }

    document.getElementById("number-list").innerHTML = list_of_numbers.join(" ")
}