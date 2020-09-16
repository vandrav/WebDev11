var newLi = document.createElement('li'); //am creat un nou li

newLi.className = 'collection-item'; //ii dam o clasa si un id
newLi.id = 'mySpecialLi';

var ulCollection = document.querySelector('.collection'); //selectam ul
var textNode = document.createTextNode('Eat') //facem o variabial care tine un TextNode
newLi.appendChild(textNode); //adaugam la li textul

var link = document.createElement('a'); //facem un nou a care are steluta de delete
link.className = 'delete-item secondary-content'; //dam o clasa pentru a

link.innerHTML = '<i class="fa fa-remove"></i>'; //punem iconita de delete pentru a

ulCollection.appendChild(newLi); //adaugam li-ul creat in ul
newLi.appendChild(link); //adaugam a-ul care contine iconita de delete in li-ul cread


console.log(newLi);