const day = document.getElementsByClassName("day")[0];
const hour = document.getElementsByClassName("hour")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("second")[0];

const anniversaryDate = "15 april 2024";

function countTime() {
  const currentTIme = new Date();
  const leftTime = new Date(anniversaryDate);
  const seconds = (leftTime - currentTIme) / 1000;
  const days = Math.floor(seconds / 3600 /24);
  const hours=Math.floor(seconds/3600)%24;
  const minutes=Math.floor(seconds/60)%60;
  const leftSeconds=Math.floor(seconds)%60
  // console.log(minutes)
  console.log(days,hours,minutes,leftSeconds)
}
countTime();
setInterval(countTime,1000)
