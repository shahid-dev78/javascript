const mySym = Symbol("key1");
const user = {
  name: "Shahid",
  age: 18,
  location: "Narowal",
  [mySym]: "mykey1",
  email: "sh@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "Sat"],
};
// console.log(user["email"]);
// console.log(typeof user[mySym]);
user.email = "sh@chat.com";
// console.log(user);

// console.log(user.email);

user.greeting = function () {
  console.log("Hello User");
};
user.greeting2 = function () {
  console.log(`Hello User,${this.name}`);
};

console.log(user.greeting());
console.log(user.greeting2());
