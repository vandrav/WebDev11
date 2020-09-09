// creem un constructor pentru un obiect care sa tine datele de logare

function Person(firstName, lastName, gender, message) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.message = message;
}




const submit = document.getElementById('submit');

//creem un element nou care sa tina bannerul

var banner = document.createElement('p');
banner.id = 'banner';



submit.addEventListener("click", function(e) {
    e.preventDefault();

    // selectam elementele din formular
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const gender = document.querySelectorAll('.gender');
    let newGender;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            newGender = gender[i].value;
        }
    }
    const message = document.getElementById('message');

    //creem un obiect nou cu elementele selectate
    const user = new Person(firstName.value, lastName.value, newGender, message.value);
    console.log(user);

    if (user.firstName == "" || user.lastName == "" || user.gender == "" || user.message == "") {
        if (user.firstName == "") {
            firstName.classList.add('must');
        } else if (user.lastName == "") {
            lastName.classList.add('must');
        } else if (user.gender == "") {
            gender.classList.add('must');
        } else if (user.message == "") {
            message.classList.add('must');
        }
        banner.className = 'missing-fields';
        banner.innerHTML = "You must complete all the required fields!"

    } else {
        banner.className = 'ok-fields';
        banner.textContent = "Thank you for contacting us, " + user.lastName;

    }
})