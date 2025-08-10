const chatUser = {};

chatUser.id = "232873d";
chatUser.name = "sammy";
chatUser.isLoggedIn = false;
// console.log(chatUser);

const regUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shahid",
      lastname: "Ali",
    },
  },
};
// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(Object.keys(chatUser));
// console.log(Object.values(chatUser));
// console.log(Object.entries(chatUser));

const course = {
  coursename: "Js",
  price: "999",
  instructor: "shahid",
};

const { instructor: ins } = course;
console.log(ins);
