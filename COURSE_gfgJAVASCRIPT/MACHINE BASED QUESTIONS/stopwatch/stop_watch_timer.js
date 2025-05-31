const currentime = document.querySelector(".para");
const buttonparent = document.querySelector(".btn-container");

let seconds = 0;
let mintues = 0;
let hours = 0;
let timerid = 0

function handlbuttonclick() {
  const button = event.target.name;
  if (button === "start") {
    timerid = setInterval(() => {
      seconds++;
      if (seconds > 58) {
        seconds = 0;
        mintues++;
        if (mintues > 58) {
          mintues = 0;
          hours++;
        }
      }

      currentime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${mintues < 10 ? `0${mintues}` : mintues} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    }, 10);
  }

  if(button === "stop"){
    clearInterval(timerid);
  }

  if(button === "reset"){
    clearInterval(timerid);
    seconds = 0;
    mintues = 0;
    hours = 0;
    currentime.innerText = "00 : 00 : 00";
  }
}
buttonparent.addEventListener("click", handlbuttonclick);
