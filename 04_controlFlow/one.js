if( 2 == "2"){
    console.log("executed");
} // executed

// 2 ==="2" not executed because here we use strict equal

// <, >, <=, >=, ==, !=, ===, !==

// if(4 >1) console.log("test1"),
// console.log("test2");
// NOTE: we can use common(,) in the place of curly brace({}) for multiline statement but this is very unreadable code

const balance = 1000;
if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than750")
} else if(balance < 900){
    console.log("less than 850");
} else {
    console.log("less than 1200");
}

// next example
const userLoggedIn = true;
const debitcard = true;
const loggdInFromGoogle = false;
const loggdInFromEmail = true

if( userLoggedIn && debitcard){
    console.log("allow to buy course");
}

if( loggdInFromGoogle || loggdInFromEmail){
    console.log("User logged in");
}

// SYNTAX FOR SWITCH
// switch(key) {
//     case value:
//         statement;
//         break;
//     default:
//         break;
// }

// EXAMPLE 1
const month = 3;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("wrong");
        break;
} // March

// EXAMPLE 2
const weekname ="tuesday";
switch(weekname){
    case "sunday":
        console.log("this is first day");
        break;
    case "monday":
        console.log("this is second day");
        break;
    case "tuesday":
        console.log("this is third day");
        break;
    default:
        console.log("wrong");
        break;
} // this is third day