const day = document.getElementsByClassName("day")[0];
const hour = document.getElementsByClassName("hour")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("second")[0];
const contentBox = document.getElementsByClassName("contentBox")[0];
const anniversaryDate = new Date("15 April 2024");

function countTime() {
  const currentTime = new Date();
  const remainingTime = anniversaryDate - currentTime;

  if (remainingTime <= 0) {
    contentBox.classList.remove("hide");
    clearInterval(intervalId);
    return;
  }

  const seconds = Math.floor(remainingTime / 1000);
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const leftSeconds = seconds % 60;

  day.textContent = days;
  hour.textContent = hours < 10 ? "0" + hours : hours;
  minute.textContent = minutes < 10 ? "0" + minutes : minutes;
  second.textContent = leftSeconds < 10 ? "0" + leftSeconds : leftSeconds;
}

countTime();
const intervalId = setInterval(countTime, 1000);
