let storeBtn = document.getElementById('store-btn');
let getBtn = document.getElementById('get-btn');

// const userId = '123';

// const user = {
//     name: 'Dan',
//     age: 30,
//     hobies: ['movies', 'sport', 'traveling']
// };

// storeBtn.addEventListener('click', () => {
//     localStorage.setItem('uid', userId); //stocare valoare in localstorage
//     localStorage.setItem('user', JSON.stringify(user)); //pentru a stoca un obiect in local storage trebuie transformat in string=>JSON.stringify
// })

// getBtn.addEventListener('click', () => {
//     const id = localStorage.getItem('uid');
//     if (id) {
//         console.log(id);
//     } else {
//         console.log('ID not found in local storage');
//     }

//     const user = JSON.parse(localStorage.getItem('user')); //pentru al lua sau sterge trebuie sa il transformam inapoi in obiect => JSON.parse
//     console.log(user);
// })



let cart = [{
        name: 'banane',
        price: '6 RON'
    },
    {
        name: 'ciocolata',
        price: '5 RON'
    }
];

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('cartItems', JSON.stringify(cart)); //adaugare in session storage
});

getBtn.addEventListener('click', () => {
    const cart = JSON.parse(sessionStorage.getItem('cartItems')); //ia obect din session storage
    if (cart) {
        console.log(cart);
    } else {
        console.log('eroare');
    }
});