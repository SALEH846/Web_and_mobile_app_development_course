var min = 0;
var sec = 0;
var msec = 0;
var interval;
var minContent = document.getElementById("min");
var secContent = document.getElementById("sec");
var msecContent = document.getElementById("msec");

function timer() {
    msec ++;
    msecContent.innerHTML = msec;
    if (msec >= 99) {
        sec ++;
        secContent.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 59) {
        min ++;
        minContent.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("startBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById("startBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;
}

function reset() {
    minContent.innerHTML = "00";
    secContent.innerHTML = "00";
    msecContent.innerHTML = "00";
    min = 0;
    sec = 0;
    msec = 0;
}