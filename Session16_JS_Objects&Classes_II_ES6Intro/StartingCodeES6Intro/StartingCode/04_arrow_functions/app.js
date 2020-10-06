function sayHelloTo(firstName = 'Ion', lastName = 'Vasile') { //in ES6 putem da un comportament defaul prin atribuirea unor valori default parametrilor
    // if (!firstName) { firstName = 'Ion'; }  ES5
    // if (!lastName) { lastName = 'Vasile'; }
    console.log("Hello" + firstName + " " + lastName + "!");
}
sayHelloTo();
sayHelloTo('Adrian', 'Marian');

const square = function(x = 3) {
    return x * x;
}
console.log(square(2));
console.log(square()); //va folosi parametrii default

const squareArrow = (x) => { return x * x };
console.log(squareArrow(12));