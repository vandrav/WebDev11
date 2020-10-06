const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat"); //querryselectorAll -> ia toate div cu seat din row
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.getElementById('movie');

let ticketPriece = Number(movieSelect.value); //initial este valoarea din movieSelect


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected"); //.seat.selected nu au spatiu intre ele pt ca sunt clasele aceluiasi element

    count.innerHTML = selectedSeats.length;
    total.innerHTML = selectedSeats.length * ticketPriece;

}

movieSelect.addEventListener('change', function(e) {
    ticketPriece = Number(e.target.value); //schimba ticket price de fiecare data cand schimbam filmul/pretul
    updateSelectedCount();
})

container.addEventListener("click", function(e) { //e este evenimentul de click => facem un event listner care pune un eveniment onlick => e practic inlocuieste ca si parametru pentru functie elementul/obiectul caruia i-am adaugat un EventListner
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) { //facem a.i. eventul sa mearga doar cand dam click pe seat fara sa dam click pe row si sa nu mearga cand locul este ocupat
        e.target.classList.toggle('selected'); //la seats neocupate daca dau click se face selectet si invers
    }
    updateSelectedCount();
});