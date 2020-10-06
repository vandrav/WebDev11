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

class Employee extends Person { //inherits Person , trebuie sa avem obiectul Person creat mai intai
    constructor(firstName, lastName, age, salary) {
        super(firstName, lastName, age); //aici se apeleaza constructorul parinte (Person in cazul acesta)
        this.salary = salary;
    }

    showSalary() {
        console.log('Salary: ' + this.salary);
    }
    static showEmailDomain() {
        console.log("test.com");
    }
}

const emp = new Employee('Iulian', 'Daniel', '23', 1400);
emp.sayHello();
emp.showSalary();

//atunci cand absolut toate obiectele dintr-o clasa sharuiesc aceeasi informatie exista o methoda speciala STATICA
//metodele statice sunt ale lui Employee nu a fiecarei persoane si nu se mai repeta din numele obiectului
Employee.showEmailDomain();