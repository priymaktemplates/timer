const buttonStart = document.querySelector("[data-action = 'start' ]");
const buttonStop = document.querySelector("[data-action = 'stop' ]");
const buttonReset = document.querySelector("[data-action = 'reset' ]");
const minuteur = document.querySelector(".minuteur");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 00;
let interval;
let isRanning = false;

buttonStart.addEventListener('click', startTimer);
buttonStop.addEventListener('click', stopTimer);
buttonReset.addEventListener('click', resetTimer);

function startTimer() {
    if (isRanning == false) {
        interval = setInterval(incrementTimer, 1000);
        isRanning = true;
    }

}

function stopTimer() {
    if (isRanning == true) {
        clearInterval(interval); // clearInterval() methode js
        isRanning = false;
    }
}

function resetTimer() {
    stopTimer();
    timerTime = 00;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer() {
    timerTime++;
    const numberOfMinutes = Math.floor(timerTime / 60);
    const numberOfSeconds = Math.floor(timerTime % 60);
    minutes.innerText = zeroNumber(numberOfMinutes);
    seconds.innerText = zeroNumber(numberOfSeconds);
}

function zeroNumber(number) {
    return ( number < 10 ) ? '0' + number : number;

}

