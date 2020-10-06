let addItem = document.getElementById('elAdd'); //selectam butonul de 'Add Item'
const elList = document.querySelector('.elList'); //selectam div-ul in care urmeaza sa fie inserat tabelul
const newTable = document.createElement('table'); //creem un element table
elList.appendChild(newTable); //adaugam tabelul nou creat in div
const sortAsc = document.getElementById('ascendent');
const sortDesc = document.getElementById('descendent');

class Database {
    constructor(items = [], markElem = []) {
        this.items = items;
        this.markElem = markElem;
    }
}

shoppingList = new Database();

addItem.addEventListener('click', e => {
    let element = document.getElementById('element').value; //luam valuarea din imput la fiecare apasare a butonului

    if (shoppingList.items == "") {

        let newTr = newTable.insertRow(0);
        let newTd1 = newTr.insertCell(0);
        let newTd2 = newTr.insertCell(1);

        newTd1.className = 'elList-control';
        newTd2.className = 'elList-control';

        newTd1.innerHTML = '<strong> Item description </strong>';
        newTd2.innerHTML = '<strong> Action </strong>';

    }

    let newTr = newTable.insertRow(newTable.rows.length);
    let newTd1 = newTr.insertCell(0);
    let newTd2 = newTr.insertCell(1);

    newTd1.className = 'elList-control item';
    newTd2.className = 'elList-control';

    shoppingList.items.push(element);
    shoppingList.markElem.push(newTd2.innerHTML);


    newTd1.innerHTML = element;
    newTd2.innerHTML = '<button class="mark">Mark as buyed</button>';


    newTd2.addEventListener('click', e => {
        newTd1.classList.toggle('buyed');
    })

    console.log(shoppingList);
});

sortAsc.addEventListener('click', () => {
    shoppingList.items.sort();
    for (let i = 0; i < shoppingList.items.length; i++) {

    }
});
sortDesc.addEventListener('click', () => shoppingList.items.reverse());

sortAsc