//8번 문제
//8-1
localStorage.setItem(
  "user",
  JSON.stringify({ 이름: "병수", 나이: 20, 주소: "시골" })
);
//8-2
console.log(JSON.parse(localStorage.getItem("user")));

//8-3
let user = JSON.parse(localStorage.getItem("user"));
const newUser = { ...user, 나이: 30 };
localStorage.setItem("user", JSON.stringify(newUser));

//8-4
localStorage.removeItem("user");

console.log(JSON.parse(localStorage.getItem("user")));

//1번 문제
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((date) => console.log(date));
