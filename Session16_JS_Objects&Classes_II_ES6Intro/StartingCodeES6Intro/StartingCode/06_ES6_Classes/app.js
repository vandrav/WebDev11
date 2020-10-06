class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayHello() {
        console.log('Hello, I am ' + this.firstName);
    }
}
const marian = new Person('Marian', 'Marian', 35);
console.log(marian.firstName);
console.log(marian.lastName);
console.log(marian.age);

marian.sayHello();
console.log(marian);