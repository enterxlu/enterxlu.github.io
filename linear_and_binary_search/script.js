let list_of_numbers = [];
let current_number_index = 10;
let checked_index = [1, 2, 3, 4];
let rejected_index = [10, 11, 12, 13, 14, 15];

function buildList(list) {
    let s = "";

    for (let i = 0; i < list.length; i++) {
        if (i == current_number_index) {
            s = s + "<span class='current-index'>" + list[i] + " " + "</span>"
        } else {
            s = s + list[i] + " ";
        }
    }
    return s;
}

function getListOfNumber() {
    let n = document.getElementById("list-length").value;
    let next_number = 0;
    let range = Math.floor(Math.random() * n + 10);

    list_of_numbers = [];

    for (let i = 0; i < n; i++) {
        next_number += Math.floor(Math.random() * range);
        list_of_numbers.push(next_number);
    }

    current_number_index = Math.floor(n / 2);

    document.getElementById("number-list").innerHTML = buildList(list_of_numbers);
}