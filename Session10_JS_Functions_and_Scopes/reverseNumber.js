// var number = document.getElementById('number').value;

// function reverse(number) {

//     var reverse = '';
//     while (number) {
//         reverse = reverse + String((number % 10));
//         console.log(reverse);
//         number = number / 10;
//         console.log(number);
//     }

// }




// var out = document.getElementById('rezultat');




// 23456
// 23456%10=6;
// 23456/10=2345.6;

function reverse() {
    var number = parseInt(document.getElementById('text1').value);
    var reversedNumber = '';

    while (number != 0) {
        reversedNumber += number % 10;
        number = parseInt(number / 10);


    }


    var output = document.getElementById('p1');
    output.innerHTML = 'The result is: ' + reversedNumber;
}