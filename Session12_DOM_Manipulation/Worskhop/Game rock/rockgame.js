var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");

scissors.addEventListener('click', chooseScissors);
paper.addEventListener('click', choosePaper);
rock.addEventListener('click', chooseRock);

var myResultPara = document.getElementById("paraRes");

function chooseScissors(){
    var userChoice = 0;
    var computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:
            myResultPara.innerHTML = "Tie!!!";
            break;
        case 1:
            myResultPara.innerHTML = "User Wins!!!";
            break;
        case 2:
            myResultPara.innerHTML = "Computer Wins!!!";
            break;
    }
}

function choosePaper(){
    var userChoice = 1;
    var computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:
            myResultPara.innerHTML = "Computer Wins!!!";
            break;
        case 1:
            myResultPara.innerHTML = "Tie!!!";
            break;
        case 2:
            myResultPara.innerHTML = "User Wins!!!";
            break;
    }
}

function chooseRock(){
    var userChoice = 2;
    var computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:
            myResultPara.innerHTML = "User Wins!!!";
            break;
        case 1:
            myResultPara.innerHTML = "Computer Wins!!!";
            break;
        case 2:
            myResultPara.innerHTML = "Tie!!!";
            break;
    }
}
