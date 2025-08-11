// < , > , <= , >= , == , != , === , !==

// if(2=="2") console.log(":)");

// const temp = 91
// if(temp < 50){ console.log("less than 50")}
// else {
//     console.log("greater then 50");
// }

// const balance = 1000
// if (balance > 500) console.log("test");
// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
    
// }
// else{
//     console.log("less then 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
    
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("Logged in");
    
}