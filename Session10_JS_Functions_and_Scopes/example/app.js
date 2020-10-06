// function sayHello() {
//     if (name) {
//         console.log('Hello ' + name + '!');
//     } else {
//         console.log('Hey there');
//     }
// }

// sayHello();
// sayHello('Vasilica');

// function sayHello(firstName, lastName) {
//     if (firstName && lastName) {
//         console.log('Hello ' + name + ' ' + lastName + '!');
//     } else {
//         console.log('Hey there');
//     }
// }
// var firstName = 'Vasilica';
// var lastName = 'Ionel';
// sayHello(firstName, lastName);

function sum(a, b) {
    // console.log('sum', a + b);
    // a = 0;
    // console.log(0);
    return a + b;
}
// var a = 2,
//     b = 3;
var n = sum(2, 8) + 12 + sum(22, 5);
console.log(n);

// console.log(a);      functia nu va schimba valoarea lui a dinafara functiei deoarece este o variabila primitiva

// function sum(numbers) {
//     console.log('sum', numbers.a + numbers.b);
//     a = 0;
//     console.log(0);
// }

// var numbers {
//     a: 3,
//     b: 2
// }

// sum(numbers);
// console.log(numbers.a);    va schimba valoarea lui a din obiect deoarece am dat ca argument o variabila de tip referinta (un obiect)


// recursive function
function factorial(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        return (n * factorian(n - 1)); //se apeleaza functia pe ea insasi (pana ajunge la un return)
    }
}
// fact(6)=6*fact(5);
// fact(6)=6*5*fact(4);
// fact(6)=6*5*4*fact(3);
// fact(6)=6*5*4*3*fact(2);
// fact(6)=6*5*4*3*2*fact(1); =>fact(1) returneaza 1
console.log(factorial(6));


// scopul variabilelor
var c = 10;

function prod() {
    console.log(c); //pot afisa o variabila globala intr-o functie
    var a = 10;
    varb = 20;
    return a * b;
}

prod();

// console.log(a)   => nu pot afisa global o variabila locala din functie