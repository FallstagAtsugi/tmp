// const name = "柿崎";
// const age = 26;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

// function add(a, b) {
//     return a - b;
// }

//アロー関数
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 4));

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

// const myProfile = ["柿崎", 26];

// const messege3 = `名前は${myProfile[0]},年齢は${myProfile[1]}`;
// console.log(messege3);

// const [name, age] = myProfile;
// const messege4 = `${name},${age}`;
// console.log(messege4);

// //スプレッド構文
// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (a, b) => {
//   console.log(a + b);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //配列を順番に処理する

//まるめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピー、結合 よくReactでも使う
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map filterを使った配列の処理
 */
const nameArr = ["田中", "中川", "柿崎"];

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, i) => {
//   console.log(`${i + 1}番目は${name}デス`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "柿崎") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);
