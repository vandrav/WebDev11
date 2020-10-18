const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timer = document.getElementById("timer");
let intervalID;

startBtn.addEventListener("click", startCounting);
stopBtn.addEventListener("click", stopCounting);

function startCounting() {
    intervalID = setInterval(showTime, 1000) //fiecare setInterval are un ID unic
}

function showTime() {
    let now = new Date();
    let output = `
            ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
            `;
    timer.innerHTML = output;
}

function stopCounting() {
    if (intervalID) {
        clearInterval(intervalID); //opreste setInterval cu id-ul intervalID
    }
}



// console.log(now.getHours(), now.getMinutes(), now.getSeconds());



// setInterval(() => console.log("salut"), 1000);