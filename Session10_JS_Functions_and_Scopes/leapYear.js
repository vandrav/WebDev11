function leapYear() {

    var number = parseInt(document.getElementById('text2').value);
    var output = document.getElementById('p2')


    if (number % 4 != 0) {
        output.innerHTML = number + ' is a common ear';
    } else if (number % 100 != 0) {
        output.innerHTML = number + ' is a leap year';
    } else if (number % 400 != 0) {
        output.innerHTML = number + ' is a common ear';
    } else {
        output.innerHTML = number + ' is a leap year';
    }
}