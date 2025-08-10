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

// result = loginUser();
// console.log(result);

function calcCartPrice(...num1) {
  return num1;
}
// console.log(calcCartPrice(200, 4994, 989));

const user = {
  userName: "Ali",
  price: 199,
};

function handleObj(anyObj) {
  console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`);
}

// handleObj(user);

const arr = [200, 438, 2432, 355];

function returnSecVal(getArray) {
  return getArray[1];
}

console.log(returnSecVal([100, 200, 200]));
