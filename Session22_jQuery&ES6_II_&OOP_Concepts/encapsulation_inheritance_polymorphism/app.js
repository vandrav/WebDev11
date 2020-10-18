//Encapsulation - limitarea accesului pentru modificarea metodelor si proprietatilor obiectului

// class Car {

//     setattr(model, yof) {
//         this.model = model;
//         this.yof = yof;
//     }

//     getModel() {
//         console.log(this.model);
//     }

//     getYear() {
//         console.log(this.yof);
//     }

// }

// let dacia = new Car();

// dacia.setattr('sandero', 2020);
// // console.log(dacia.model);
// dacia.getModel();
// dacia.getYear();

// class Person {

//     constructor(name, age, phone) {
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//     }

//     getDetails() {
//         console.log(`My name is ${this.name}, I'm ${this.age} old and my phone is ${this.phone}`);
//     }

// }

// let geo = new Person('George', 23, 911);
// geo.getDetails();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     const phone = 9236482643;

//     const showPhone = function() {
//         console.log(phone);
//     }
//     this.showDetails = function() {
//         showPhone();
//         console.log(`My name is ${this.name}, I'm ${this.age} old `);
//     }
// }

// let geo = new Person('George', 23);

// geo.showDetails();



//Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Hello from Person Constructor")
    }

    sayHello() {
        console.log("Hello from Person Class!");
    }
}

class Student extends Person {
    constructor(university, name, age) {
        super(name, age);
        this.university = university;
        console.log("Hello from Student Constructor")
    }

    sayHello() {
        console.log("Hello from Student Class!") //chiar daca avem o metoda mostenita, daca o rescriem in clasa copil atunci va fi folosita aceasta chiar daca este mostenita de la clasa parinte
    }
}

// let p = new Person("Ion", 44);
let s = new Student("UPB"); //cand vede new se duce in contructorul clasei de dupa new, in Student vede ca are super si super foloseste ce e dupa extends => Person

// p.sayHello();
s.sayHello();