alert("Hello!");
window.console.log(window.screenX);
window.console.log(window.screenY);

let val;

val = window.innerHeight; //inaltimea ferestrei din browser
val = window.innerWidth; //latimea ferestrei din browser


val = window.outerHeight; //inaltimea din afara documentului


const divEl = document.createElement('div');
divEl.style.marginTop = '1000px';
document.body.appendChild(divEl);
val = window.scrollY; //ne arata pe udne suntem cu scroiolul

console.log(val);