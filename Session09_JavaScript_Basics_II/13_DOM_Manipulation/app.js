// function countToN(n) {

//     for (var i = 0; i <= n; i++) {
//         console.log(i);
//     }
// }


// // get value from imput
// var input1 = document.getElementById('text1');
// var input1Value = input1.nodeValue;
// console.log(input1Value);

// countToN(input1);

function countToN(n) {
    var n = document.getElementById('text1').nodeValue;
    var out = document.getElementById('output1');
    var result = '';
    for (var i = 0; i <= n; i++) {
        result += i + '';
    }
    out.innerHTML = "Rezultatul este: " + result;
}