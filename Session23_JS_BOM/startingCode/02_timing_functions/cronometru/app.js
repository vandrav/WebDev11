const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timer = document.getElementById("timer");
let intervalID;
let i = 0;
startBtn.addEventListener("click", startCounting);
stopBtn.addEventListener("click", stopCounting);

function startCounting() {
    intervalID = setInterval(showTime, 1000) //fiecare setInterval are un ID unic
}

function showTime() {
    i++;
    let minutes = formatTime(parseInt(i / 60));
    let seconds = formatTime(i % 60);

    let output = `
            ${minutes}:${seconds}
            `;
    timer.innerHTML = output;
}

function stopCounting() {
    if (intervalID) {
        clearInterval(intervalID); //opreste setInterval cu id-ul intervalID
    }
}

function formatTime(x) {
    // if (time < 10) {
    //     return `0${time}`;
    // } else {
    //     return time
    // }

    // let retVal = (x < 10) ? `0${x}` : x;
    // return retVal;

    return (x < 10) ? `0${x}` : x; //operator ternar
}



// console.log(now.getHours(), now.getMinutes(), now.getSeconds());



// setInterval(() => console.log("salut"), 1000);