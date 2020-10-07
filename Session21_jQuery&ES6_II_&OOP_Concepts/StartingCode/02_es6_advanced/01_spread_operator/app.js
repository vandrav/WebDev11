let animals = ["dog", "cat", "dolphin", "monkey", "tiger", "fox", "bear"];
let newanimals = [...animals, "lion"]; //adaugam(concatenam) primul array in cel de al 2-lea folosind operatorul spread
console.log(newanimals);

let user1 = {
    name: "Gigel",
    age: 101
}

let user2 = {
    country: "Romania",
    phone: 403435
}
let user3 = {
    name: "Anton",
    age: 50
}
let users = {...user1 }; //clonam obiectul user1 in users (nu il copiem->daca stergem in user1 se sterge si users ->users=user1->au aceeasi referinta)=>daca schimbam obiectul user1 nu se schimba si obiectul 2
console.log(users);
let users2 = {...user1, ...user2 } //face merge cu cele 2 obiecte in noul users2 -> este similar cu JOIN la baze de date
console.log(users2);
let users3 = {...user1, ...user2, ...user3 } //face merge cu cele 3 obiecte in noul users3 dar pastreaza datele din user3 fiind proprietati similare se suprascriu din ultimul
console.log(users3);