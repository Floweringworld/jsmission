const counter = document.querySelector("#counter");
let num = Number(counter.textContent);
const a = setInterval(() => {
  if (num < 5) {
    num++;
    counter.textContent = num;
  } else {
    console.log("종료");
    clearInterval(a);
  }
}, 1000);
