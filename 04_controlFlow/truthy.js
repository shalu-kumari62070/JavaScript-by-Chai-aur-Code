const userEmail = "h@hello.con";  //output = Got user email
// const userEmail = ""; // output = Don't have user email because here we give empty string
// const userEmail = []; //output = Got user email

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// NOTE : falsy values
// false, 0, -0, "", BigInt 0n, null, NaN, undefined

// NOTE : truthy values
// "0", 'false', " "(here we give one space), [], {},  function(){}(this is called empty function)

// IMPORTANT
console.log(false == 0);    //output = true
console.log(false == '');  //output = true
console.log(0 == '');      //output = true

// NOTE : HOW TO CHECK EMPYT ARRAY
if(userEmail.length === 0){
    console.log("array is empty");
}

// NOTE : HOW TO CHECK EMPYT OBJECT
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Null Coalescing Operator (??): null undefined
let val1 = 5 ?? 10;
console.log(val1);  //output = 5

let val2 = null ?? 10;
console.log(val2);  //output = 10

let val3 = undefined ?? 15;
console.log(val3);  //output = 15

let val4 = null ?? 10 ?? 20;
console.log(val4); //output = 10

let val5 = null ?? undefined;
console.log(val5); // output = undefined

let val6 = undefined ?? null;
console.log(val6);  //output =  null

let val7 = undefined ?? undefined;
console.log(val7);  // output =  undefined

// TERNIARY OPERATOR
// SYNTAX
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
