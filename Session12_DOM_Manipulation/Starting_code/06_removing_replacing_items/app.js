var ulCollection = document.querySelector('.collection');


// ulCollection.removeChild(document.querySelector('li:nth-child(3)')); //am sters al-3lea element(li) din ul
var liElements = document.getElementsByClassName('collection-item');
ulCollection.removeChild(liElements[1]);

console.log(ulCollection);