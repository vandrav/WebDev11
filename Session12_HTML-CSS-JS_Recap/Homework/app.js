let addItem = document.getElementById('elAdd');
let elements = [];

addItem.addEventListener('click', e => {
    let element = document.getElementById('element').value;
    let newTable = document.createElement('table');
    let newTr = document.createElement('tr');
    let newTd1 = document.createElement('td');
    let newTd2 = document.createElement('td');
    let elList = document.querySelector('.elList');
    newTd1.className = 'elList-control';
    newTd2.className = 'elList-control';


    if (elements == "") {
        elements.push(element);

        newTd1.innerHTML = '<strong> Item description </strong>';
        newTd2.innerHTML = '<strong> Action </strong>';

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTable.appendChild(newTr);
        console.log(newTable);
        elList.appendChild(newTable);

        // newTd1.innerHTML = element;
        // newTd2.innerHTML = '<button class="mark">Mark as buyed</button>';

        // newTr.appendChild(newTd1);
        // newTr.appendChild(newTd2);
        // newTable.appendChild(newTr);
        // elList.appendChild(newTable);

    } else {
        newTd1.innerHTML = element;
        newTd2.innerHTML = '<button class="mark">Mark as buyed</button>';

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTable.appendChild(newTr);
        elList.appendChild(newTable);
    }



});















// var newLi = document.createElement('li'); //am creat un nou li

// newLi.className = 'collection-item'; //ii dam o clasa si un id
// newLi.id = 'mySpecialLi';

// var ulCollection = document.querySelector('.collection'); //selectam ul
// var textNode = document.createTextNode('Eat') //facem o variabial care tine un TextNode
// newLi.appendChild(textNode); //adaugam la li textul

// var link = document.createElement('a'); //facem un nou a care are steluta de delete
// link.className = 'delete-item secondary-content'; //dam o clasa pentru a

// link.innerHTML = '<i class="fa fa-remove"></i>'; //punem iconita de delete pentru a

// ulCollection.appendChild(newLi); //adaugam li-ul creat in ul
// newLi.appendChild(link); //adaugam a-ul care contine iconita de delete in li-ul cread


// console.log(newLi);