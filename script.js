document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목이 아니다.";
});

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(1, 2);

console.log("----------------------------");

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}
isEvenOrOdd(2);

console.log("----------------------------");
const name = "병수";
const age = 20;

console.log("이름 :" + name);
console.log("나이 :" + age);
