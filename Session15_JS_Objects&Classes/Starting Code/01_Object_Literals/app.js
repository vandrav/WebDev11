// 1crteate a literal object person
//firstName, lastName, age
//create a method bio() that prints some info about the person


//2 add a new property that contains hobbies



var person = {
        firstName: "Aurel",
        lastName: "Vlaicu",
        age: 45,
        hobbies: ["sport", "movies", "airplanes"],
        bio: function() {
            console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old.");
        },
        lsitHobies: function() {
            for (var i = 0; i < this.hobbies.length; i++) {
                console.log(this.hobbies[i]);
            }
        }
    }
    // person.bio();
    // person.lsitHobies();
var myIndex = "lastName";
console.log(person[myIndex]);
// console.log(person['lastName']);

// console.log(Object.values(person));
console.log(Object.keys(person)) //proprietatile obiectului / variabilele lui