let count;
console.log(count);
count = 30;
console.log(count);
let newCount = 0;

const daysInWeek = 7;

let tomatoCount; //キャメルケース JSのベストプラクティス
let tomato_count; //スネークケース
let $tomatoCount;
let _tomatoCount;

let add = 2 + 5;
console.log(add);

//余り
console.log(32 % 5);

//累乗
console.log(2 ** 3);

let number = 10;
number = -4;
number = 32.32;

let string = "Hello";
number = "hello"; //動的型つけ言語

const userName = `YOshipi`;
string = string + userName;
console.log(string);

string = `コンにちは ${userName}!`;
console.log(string);

const coffee = {
  name: "Moka",
  size: 250,
  isHot: true,
  topping: ["test", "test"],
  nutritons: {
    calories: 430,
    sugars: 20,
  },
};

console.log(coffee.name);
console.log(coffee.nutritons.calories);
