// Global scope

var a = 1;
let b = 2;
const c = 3;

console.log('Global scope', a, b, c);

// Function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope', a, b, c);
}

test();


if (2 < 3) {
    var a = 7; //aici var schimba si global scope si este valabil si hoisting (primul console.log ar da pt a valoarea undefined dar nu eroare cum ca nu este declarat)
    let b = 8;
    const c = 9;
    console.log('If scope', a, b, c);
}

console.log('Global scope', a, b, c);

d = 20; //pune automat var
console.log(d); //Hoisting
var d;
// let d => ar da eroare pt ca variabila este initializata inainte de a fi definita
// console.log(e); //Not Hoisting

const person = {
    name: 'Vasile',
    age: 35
}

person.name = {
    firstName: 'Popescu',
    lastName: 'Cristi'
}

console.log(person.name, person.age);