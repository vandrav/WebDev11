let numbers = [12, 3, 4, 12, 1, 22, 444, 12, 5, -12];
let fruits = ['Apple', 'banana', 'orange', 'lime', 'pear'];

//sort

// let sortedFruits = fruits.sort();
// console.log(sortedFruits);

// let sortedNumbers = numbers.sort(); //sorteaza alfabetic deci nu v-a sorta numerele corect
// console.log(sortedNumbers);

// let numericSort = function(a, b) {
//     return a - b;
// }

// let sortedNumbers = numbers.sort(numericSort);
// console.log(sortedNumbers);

let sortedNumbers = numbers.sort((a, b) => { return a - b; }); //sorteaza in functie de diferenta dintre ele
//OR
sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);

let descendingSortedNumbers = numbers.sort((a, b) => b - a);
console.log(descendingSortedNumbers);

let under10 = numbers.find((a) => a < 10); //primul nr mai mare decat 10
console.log(under10);

let ages = [12, 33, 44, 11, 17, 18, 12, 99, 101];
let canDrive = ages.filter((age) => age >= 18 && age < 70); //filtram sa vedem cine are intre 18 si 70 de ani
console.log(canDrive);

ages.forEach((i) => { console.log(i); }); //pentru fiecare element din ages printeaza-l

const sumWithReduce = numbers.reduce((number, sum) => sum + number); //daca am fiecare numar din array si o suma sa faca sum+number => ia fiecare numar si construieste o suma care va fi mereu suma precedenta si un numar

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);