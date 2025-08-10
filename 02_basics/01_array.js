let fruits = ["🥭", "🍌", "🍎", "🍉"];
const num = [0, 1, 2, 3, 4, 5];
const newArr = new Array("Shahid", "Ali", "Zubair");
// console.log(fruits.length);

// Methods

// fruits.push("🍐");
// fruits.pop();
// fruits.unshift("🍒");
// fruits.shift();
// console.log(fruits.includes("🍌"));
// console.log(fruits.indexOf("🍌"));
// console.log(fruits);

// const strFruits = fruits.join("-");
// console.log(strFruits);

// Slice , Splice

console.log("A ", fruits);
const myn1 = fruits.slice(1, 3);
console.log(myn1);

console.log("B ", fruits);

const myn2 = fruits.splice(1, 3);
console.log("C ", fruits);

console.log(myn2);
