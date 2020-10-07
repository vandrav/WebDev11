//destructuring -> spargem in mai multe bucati...tragem din ceva lucruri

let a, b;
[a, b] = [100, 200]; //initializam ambele variabile in acelasi timp;
console.log(a, b);

[a, b, c, ...d] = [100, 200, 300, 400, 500, 600]; //la initioalizare de genul acesta merge fara sa declaram variabilele, de asemenea d ia toate valorile care sunt peste numarul valorilor date
console.log(d);

//rest pattern

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log({ rest });


//Object deconstructing

const person {
    name: "Johnny",
    age: 25,
    city: "New York",
    sayhello: function() {
        console.log("Hello");
    }
};
const { name, age, city, sayHello } = person //ia variabile si le asigneaza valorile din obiect