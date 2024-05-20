const humans = [
  {
    name: "철수",
    age: 20,
    type: "남",
  },
  {
    name: "짱구",
    age: 19,
    type: "남",
  },
  {
    name: "유리",
    age: 21,
    type: "여",
  },
];

console.log(humans);

humans.forEach(function (product) {
  let html = `<h2>${product.name}</h2>
    <p>${product.age}</p>
    <p>${product.type}</p>
`;
  document.querySelector(".people").insertAdjacentHTML("beforeend", html);
});

console.log("---------------------------");
const a = humans.find((human) => {
  return human.type === "여";
});
console.log(a);
console.log("---------------------------");
const b = humans.filter((human) => {
  return human.type === "남";
});
console.log(b);
console.log("---------------------------");
const newHumans = humans.map((human) => {
  return { name: human.name, age: human.age + 10, type: human.type };
});
console.log(newHumans);
console.log("---------------------------");
const users = humans.sort((a, b) => {
  return b.age - a.age;
});

console.log(users);

console.log("---------------------------");
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const us = { ...user };
console.log(us.주소);
