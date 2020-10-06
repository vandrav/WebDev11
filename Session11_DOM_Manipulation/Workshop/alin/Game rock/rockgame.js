var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");

scissors.addEventListener('click', chooseScissors);
paper.addEventListener('click', choosePaper);
rock.addEventListener('click', chooseRock);

var myResoltPara = document.getElementById('paraRes');


function chooseScissors() {
    var userChoise = 0;
    console.log(userChoise);
    var computerChoise = Math.floor(Math.random() * 3);
    console.log(computerChoise);
    switch (computerChoise) {
        case 0:
            myResoltPara.innerHTML = 'Tie!!!';
            break;
        case 1:
            myResoltPara.innerHTML = 'User Wins !!!';
            break;
        case 2:
            myResoltPara.innerHTML = 'Computer Wins!!!';
            break;
    }
}

function choosePaper() {
    var userChoise = 1;
    console.log(userChoise);
    var computerChoise = Math.floor(Math.random() * 3);
    console.log(computerChoise);
}

function chooseRock() {
    var userChoise = 2;
    console.log(userChoise);
    var computerChoise = Math.floor(Math.random() * 3);
    console.log(computerChoise);
}