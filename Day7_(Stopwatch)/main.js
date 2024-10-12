let millisecondsDisplay = document.querySelector(".millisecond h2");
let secondsDisplay = document.querySelector(".second h2");
let minutesDisplay = document.querySelector(".minute h2");
let hoursDisplay = document.querySelector(".hour h2");

let timeStampButton = document.querySelector(".time-stamp");
let timeStampDisplay = document.querySelector(".time-stamp-display");

///////////////////////////
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
///////////////////////////

function stopwatch() {
    milliseconds += 1;
    if (milliseconds <= 9) {
        millisecondsDisplay.innerHTML = "0" + milliseconds;
    }
    else {
        millisecondsDisplay.innerHTML = milliseconds;
    }
    if (milliseconds >= 99) {
        milliseconds = 0;
        seconds++;
        if (seconds <= 9) {
            secondsDisplay.innerHTML = "0" + seconds;
        } else {
            secondsDisplay.innerHTML = seconds;
        }

    }
    if (seconds >= 59) {
        seconds = 0;
        minutes++;
        if (minutes <= 9) {
            minutesDisplay.innerHTML = "0" + minutes;
        } else {
            minutesDisplay.innerHTML = minutes;
        }
    }

    if (minutes >= 59) {
        minutes = 0;
        hours++;
        if (hours <= 9) {
            hoursDisplay.innerHTML = "0" + hours;
        } else {
            hoursDisplay.innerHTML = hours;
        }
    }
}

let stopwatchInterval;
let playPause = document.querySelector(".play-pause");
playPause.addEventListener("click", () => {

    if (playPause.innerHTML == '<i class="fa-solid fa-pause"></i>') {
        playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
        clearInterval(stopwatchInterval);
        playPause.title = "Play";

    } else {
        playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPause.title = "Pause";
        stopwatchInterval = setInterval(stopwatch, 10);
    }

})

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    millisecondsDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    hoursDisplay.innerHTML = "00";
    playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
})

// Time Stamp
timeStampButton.addEventListener("click", () => {
    let stampArea = document.querySelector(".time-stamp-area");
    stampArea.style.display = "flex";
    // creating a p tag and insert it to the begging of timeStampDisplay
    let pTag = document.createElement("p");
    pTag.innerHTML = hoursDisplay.innerHTML + ":" + minutesDisplay.innerHTML + ":" + secondsDisplay.innerHTML + ":" + millisecondsDisplay.innerHTML
    timeStampDisplay.insertBefore(pTag, timeStampDisplay.firstChild);
})