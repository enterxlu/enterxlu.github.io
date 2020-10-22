function pressNum(digit) {
    let display_text = document.getElementById("display").innerHTML;
    if (display_text.length > 8) {
        alert("Max Digits");
        return;
    }
    let display_num = parseFloat(display_text);
    display_num *= 10;
    display_num += digit;
    document.getElementById("display").innerHTML = display_num;
}