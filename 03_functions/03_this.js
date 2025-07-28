// this keyword is used to refer current context
const user = {
    username : "Prince",
    price : 9999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        // output of this = {
        //   username: 'Prince',
        //   price: 9999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }
        // Sam, welcome to website
        // {
        //   username: 'Sam',
        //   price: 9999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }
    }
}
user.welcomeMessage(); // Prince, welcome to website
user.username = "Sam";
user.welcomeMessage(); // Sam, welcome to website

console.log(this);  // {}
// note: console.log(this); browser pe print karwane per WINDOW PROPERTY MILTA HAI (MORE AMOUNT ME)
// note: console.log(this); isko kisi function ke under print karwane se v bhaut sare property dekhaen ki milta hai
// note: browser ke under global object WINDOW Hai

// this under function
function hii(){
    console.log(this);
}
hii();

function hll(){
    username : "Prince";
    console.log(username);  // ReferenceError: username is not defined
    console.log(this.username);  // undefined
  
}
hll();
// note: this ko function ke under use nhi kare sakte hai proper

const hello = function (){
    username : "Prince";
    // console.log(username);  // ReferenceError: username is not defined
    // console.log(this.username);  // undefined
  
}
hello();


// this under arrow function
const hello = () => {
    username : "Prince";
    console.log(this); // {} // {}
    console.log(username);  // ReferenceError: username is not defined
    console.log(this.username);  // undefined
  
}
hello();


// +++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// syntax 1:
// () => {

// }

// NOTE: when we use return statement this is called  EXPLICIT RETURN
// NOTE: when we don't use return statement this is called  IMPLICIT RETURN

// syntax 2: store into variable
const add = (num1, num2) => {  // EXPLICIT RETURN
    return num1 + num2;
}
console.log(add(3, 4)); // 7

// NOTE: when we use curly braces we need to write  return statement
// NOTE: When we use parenthesis we don't need to write  return statement

// syntax 3: when we have single statement we don't need to write curly braces({}) and return statement
const addition = (num1, num2) => num1 + num2;
console.log(addition(3, 4));  // 7
// or
const addTwo = (num1, num2) => (num1 + num2);  // IMPLICIT RETURN
console.log(addTwo(3, 4));  // 7

// NOTE: when we want to return OBJECT we close object under parenthesis like - ({})
const names = (num1, num2) => ({username: "Komal"}); // here we return object
console.log(names(3, 4));  // output = { username: 'Komal' }

const name= () => ({username: "Komal"}); // here we return object
console.log(name());  // output = { username: 'Komal' }

