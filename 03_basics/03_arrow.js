const user = {
    userName: "Shahid",
    price:999,
    welcomeMsg:function () {
         console.log(`${this.userName} welcome 😜`);
         console.log(this);
         
         
    }
}

// user.welcomeMsg()
// console.log(this);

// function chai(){
//     let userName = "Shahid"
//     console.log(this.userName);
// }
// chai()

const chai =( ) =>  { 
    let userName = "Shahid"
    console.log(this.userName);
}
// chai()

// const add = (x,y) =>  x+y
// const add = (x,y) =>  (x+y)
const add = (x,y) =>  (
    {userName:"Shahid"}
)



console.log(add(10,4));
