// stop watch javscript//

let startTime;
let timerInterval;

function startStopwatch() {
  if (!startTime) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
  }
}

function stopStopwatch() {
  if (startTime) {
    clearInterval(timerInterval);
    startTime = undefined;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  startTime = undefined;
  updateDisplay(0);
}

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  updateDisplay(elapsedTime);
}

function updateDisplay(elapsedTime) {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(
    seconds
  )}.${padMilliseconds(milliseconds)}`;
  document.getElementById("time-display").innerText = formattedTime;
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

function padMilliseconds(milliseconds) {
  return ("00" + milliseconds).slice(-3);
}
