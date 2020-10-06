var colItems = document.getElementsByClassName('collection-item'); //ne va returna un array de elemente/obiecte
console.log(colItems);

colItems[3].style.background = 'red';
colItems[4].textContent = "Eat";

var colItemsByTag = document.getElementsByTagName('li');
console.log(colItemsByTag);
colItemsByTag[1].style.color = 'blue';

var links = document.querySelectorAll('.delete-item');
console.log(links);

//change bg color to grey for idd lis 
var oddLis = document.querySelectorAll('li:nth-child(odd)');
console.log(oddLis)
for (var i = 0; i < oddLis.length; i++) {
    oddLis[i].style.background = 'grey';
}
//change bg color to yellor for even lis
var evenLis = document.querySelectorAll('li:nth-child(even)');
console.log(evenLis)
for (var i = 0; i < evenLis.length; i++) {
    evenLis[i].style.background = 'yellow';
}