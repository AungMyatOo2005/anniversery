const day = document.getElementsByClassName("day")[0];
const hour = document.getElementsByClassName("hour")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("second")[0];
const contentBox = document.getElementsByClassName("contentBox")[0];
const anniversaryDate = new Date("15 April 2024");
const usImg = document.querySelector(".usImg");
const textForYou = document.querySelector(".textForYou");
const nextButton = document.querySelector(".next-btn");
const backButton = document.querySelector(".back-btn");

const imageArray = [
  {
    id: 1,
    path: "./images/us-2.jpg",
    text: "first date tone ka, a yan twe chin nay tar mee ko twe lik ya tok lal koh nyi ma lay ta york ya lik ta lo pal chit poh kung tal mee ka. hee hee 😁",
  },
  {
    id: 2,
    path: "./images/us-3.jpg",
    text: "second date kha lay, mee yae grandma load kwyay tae KAT KYEE KITE sar loh kung tal ,BTW ko ko PaZon 2 kung pal sar ya tal 😷",
  },
  {
    id: 3,
    path: "./images/us-1.jpg",
    text: "SanChaung eaim mhr hta min lr sar tone ka photo lay, mee a yoo htwin pay tae fish bal tok mha ma mae buu..., chit tal mee : 💗",
  },
  {
    id: 4,
    path: "./images/us-4.jpg",
    text: "dar lay ka tok fav FOTO lay, mee ka hla tal dar pae mae kokoe loud ma hla buu 🤣",
  },
];
let currentCount = 0;
let intervalId;

function fixed() {
  if (currentCount > 3) {
    currentCount = 0;
  } else if (currentCount < 0) {
    currentCount = 3;
  }
  createImgAndText();
}

function countTime() {
  const currentTime = new Date();
  const remainingTime = anniversaryDate - currentTime;

  if (remainingTime <= 0) {
    clearInterval(intervalId);
    contentBox.classList.remove("hide");
    createImgAndText();
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

function createImgAndText() {
  usImg.src = imageArray[currentCount].path;
  textForYou.textContent = imageArray[currentCount].text;
  return;
}

nextButton.addEventListener("click", function () {
  currentCount++;
  fixed();
});

backButton.addEventListener("click", function () {
  currentCount--;
  fixed();
});

countTime();
intervalId = setInterval(countTime, 1000);
