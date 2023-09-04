// const name = "柿崎";
// const age = 26;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

// function add(a, b) {
//     return a - b;
// }

//アロー関数
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 4));

//分割代入
// const myProfile = {
//   name: "柿崎",
//   age: 26,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = ["柿崎", 26];

const messege3 = `名前は${myProfile[0]},年齢は${myProfile[1]}`;
console.log(messege3);

const [name, age] = myProfile;
const messege4 = `${name},${age}`;
console.log(messege4);
