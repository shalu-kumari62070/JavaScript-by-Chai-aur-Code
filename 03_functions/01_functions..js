function addTwoNumber(num1, num2){  // num1 and num2 are Parameters
  console.log(`sum = ${num1+num2}`);
}
// addTwoNumber();         // sum = NaN
// addTwoNumber(10,20);  // sum = 30
// //  10, 20 are arguments
// addTwoNumber(30,29); // sum = 59
// addTwoNumber(3, "4");  // sum = 34
// addTwoNumber("4", 5);  // sum = 45
// addTwoNumber(3,"a");  // sum = 3a
// addTwoNumber("a",4);  // sum = a4
// addTwoNumber(2,2.3);  // sum = 4.3
// addTwoNumber(4);      // sum = NaN
// addTwoNumber(3, null); // sum = 3

// store value with the help of variable
const result = addTwoNumber(10, 10);  // sum = 20
console.log(`Result = ${result}`);  // Result = undefined 
// here we don't return any value so when we print result so output = undefined

// node 03_functions/01_functions..js

// if you don't want to receive undefined we have to return value
function add(num1, num2){
    let result = num1 + num2;
    return result;
    console.log("this is not exetue because we write after return statement");
}
const ans = add(3,4);
console.log("result = ",ans);  // result =  7 
// here we dont receive undefined because we use return 

function logInUserMessage(username){
    return `${username} just logged in`;
}
console.log(logInUserMessage()); // undefined just logged in
console.log(logInUserMessage("Ram"));  // Ram just logged in


function UserMessage(username){
    if(username === undefined){
        console.log("please enter username");
    }
    return `${username} just logged in`;
}
console.log(UserMessage())
console.log(UserMessage("Siya"));

// use default value
function UserMessage(username = "Jhon"){
    if(username === undefined){
        console.log("please enter username");
    }
    return `${username} just logged in`;
}
console.log(UserMessage());  // Jhon just logged in
// note : here we don't receive udefined because we use defalut value
console.log(UserMessage("Sammy"));  // Sammy just logged in