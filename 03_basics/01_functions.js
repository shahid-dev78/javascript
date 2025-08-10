function sayName() {
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("D");
}

// sayName();

function add(x, y) {
  return x + y;
}

const sum = add(10, 5);
// console.log("Result : ", sum);

function loginUser(userName = "sam") {
  //   if (userName === undefined) {
  //     console.log("enter your name");
  //     return;
  //   }
  return `${userName} just logged in`;
}

result = loginUser();
console.log(result);
