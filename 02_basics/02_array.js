// Marvel Heroes
const marvelHeroes = ["🕷️", "🦸‍♂️", "🛡️", "🧠", "⚡"];

// DC Heroes
const dcHeroes = ["🦇", "🦸‍♀️", "🗡️", "🛠️", "👽"];

// marvelHeroes.push(dcHeroes);

// const combinedHero = marvelHeroes.concat(dcHeroes);
// console.log(combinedHero);

const allheros = [...marvelHeroes, ...dcHeroes];
// console.log(allheros);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realArr = arr.flat(Infinity);
console.log(realArr);

let score1 = 100;
let score3 = 200;
let score4 = 300;
console.log(Array.of(score1, score3, score4));
