function repeat() {
    var number = Number(document.getElementById('number').value);
    var list = [2, 3, 5, 7, 5, 3];
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (number == list[i]) {
            count++;
        }
    }
    // take the paragraph
    var output = document.getElementById('p2c');

    if (count >= 2) {
        output.innerHTML = number + " is repeating " + count + " times";
    } else if (count == 1) {
        output.innerHTML = number + " is repeating " + count + " time";
    } else {
        output.innerHTML = "the number " + number + " is not in the list";
    }

}