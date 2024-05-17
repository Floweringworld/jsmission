window.addEventListener("scroll", function () {
  console.log(scrollY);
});

console.log("----------------------------------------");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("----------------------------------------");

for (let a = 0; a <= 20; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

console.log("----------------------------------------");
setTimeout(() => {
  console.log("3초 후 출력되는 텍스트입니다.");
}, 3000);
