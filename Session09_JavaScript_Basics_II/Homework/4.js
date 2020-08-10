function hundred(number) {
    var list = [];
    for (var i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            list.push("FizzBuzz");
        } else if (i % 3 == 0) {
            list.push("Fizz");
        } else if (i % 5 == 0) {
            list.push("Buzz");
        } else {
            list.push(i);
        }
    }
    var output = document.getElementById('p4');
    output.innerHTML = list;
}
hundred(100);