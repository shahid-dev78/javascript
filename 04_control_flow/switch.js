// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default");
        
        break;
}

// Falsy: false, 0 ,-0 , " ", null , undefined , NaN

const emptyObj = {}
if (Object.keys(emptyObj).length == 0){
    console.log("empty");
    
}
