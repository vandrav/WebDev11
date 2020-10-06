var clrTsk = document.querySelector(".clear-tasks");
// console.log(clrTsk);

clrTsk.addEventListener('click', myFunc); //cand se va intampla evenimentul click pe clrTsk (butonul clear task) se va apela mFunc

function myFunc(e) {
    console.log(e);
    console.log(e.target); //target-> elementul tinta (care a fost click-uit)
    console.log(e.target.className)
    console.log(e.type);
    console.log('CLICKED!!');
}