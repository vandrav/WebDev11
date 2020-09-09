// creem un constructor pentru un obiect care sa tine datele de logare

function Person(firstName, lastName, gender, message) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.message = message;
}


// selectam elementele din formular
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lasttName');
const gender = document.querySelector('.gender');
const message = document.getElementById('message');
const submit = document.getElementById('submit');


//creem un element nou care sa tina bannerul

var banner = document.createElement('p');
banner.id = 'banner';


//creem un obiect nou cu elementele selectate
const user = new Person(firstName, lastName, gender, message);


submit.addEventListener("click", function(e) {
    if (user.firstName == null || user.lastName == null || user.gender == null || user.message == null) {
        if (user.firstName == null) {
            user.firstName.classList.toggle('must');
        } else if (user.lastName == null) {
            user.lastName.classList.toggle('must');
        } else if (user.gender == null) {
            user.gender.classList.toggle('must');
        } else if (user.message == null) {
            user.message.classList.toggle('must');
        }
        banner.className = 'missing-fields';
        banner.innerHTML = "You must complete all the required fields!"
    } else {
        banner.className = 'ok-fields';
        banner.textContent = "Thank you for contacting us, " + user.lastName;
    }
})