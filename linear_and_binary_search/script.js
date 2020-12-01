let list_of_numbers = [];
let current_number_index = 10;
let checked_index = [0, 1, 2, 3, 4];
let rejected_index = [8, 9, 10];

makeListOfNumbers();

/**
* checkInList(index, list)
* input: index, single number
* input: list, list of numbers
* output: return true if the index exists in the list of numbers
* otherwise return false
*/
function checkInList(index, list) {
    for (let i = 0; i < list.length; i++) {
        if (index == list[i]) {
            return true;
        }
    }
    return false;
}

/**
 * buildList(list)
 * input: list
 * output: mark up current_number_index, checked_index and rejected_index 
 */
function buildList(list) {
    let s = "";

    for (let i = 0; i < list.length; i++) {
        if (i == current_number_index) {
            s = s + "<span class='current-index'>" + list[i] + " " + "</span>"
        }
        else if (checkInList(i, checked_index)) {
            s = s + "<span class='checked-index'>" + list[i] + " " + "</span>"
        }
        else if (checkInList(i, rejected_index)) {
            s = s + "<span class='rejected-index'>" + list[i] + " " + "</span>"
        }
        else {
            s = s + list[i] + " ";
        }
    }
    return s;
}

/**
 * displayList(list)
 * input: list
 * display list on html
 */
function displayList(list) {
    document.getElementById("number-list").innerHTML = buildList(list);
}

/**
 * makeListOfNumbers()
 * input: N/A
 * output: call displayList to display a random list with the length number from input box
 */
function makeListOfNumbers() {
    let n = document.getElementById("list-length").value;
    let next_number = 0;
    let range = Math.floor(Math.random() * n + 10);

    list_of_numbers = [];

    for (let i = 0; i < n; i++) {
        next_number += Math.floor(Math.random() * range);
        list_of_numbers.push(next_number);
    }

    current_number_index = Math.floor(n / 2);
    displayList(list_of_numbers);
}

/**
 * reset()
 * input: N/A
 * output: reset all variables
 */
function reset() {
    current_number_index = -1;
    checked_index = [];
    rejected_index = [];
    displayList(list_of_numbers);
}