const name = "Shahid";
const repoCount = 1;

// console.log(name + repoCount + " Val");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shahid-Dv-com");
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("d"));
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const str1 = "       shahid     ";
// console.log(str1.trim());

// const url = "https://shahid.com/sh%20";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("shahid"));
console.log(gameName.split("-"));
