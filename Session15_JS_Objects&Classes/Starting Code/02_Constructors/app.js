//create a Person constructor

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.bio = function() {
        console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old.");
    }
}
var person1 = new Person("Ion", "Vasile", 25);
var person1 = new Person("Mitica", "Dragomir", 44);
var person1 = new Person("Gigi", "Capra", 18);

console.log(person1);