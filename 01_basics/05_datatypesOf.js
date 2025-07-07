//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
console.log(typeof score);  //number
const scoreValue = 100.3;   
console.log(typeof scoreValue);  //number

const isLoggedIn = false; 
console.log(typeof isLoggedIn);  //boolean
const outsideTemp = null;
console.log(typeof outsideTemp);  //object
let userEmail;
console.log(typeof userEmail);  //undefined

const id = Symbol('123');
console.log(typeof id);   //symbol

const anotherId = Symbol('123');
console.log(typeof anotherId);  //symbol

console.log(id === anotherId);  //false
const bigNumber = 3456543576654356754n
console.log(typeof bigNumber);  //bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);  // object
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj);   // object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);  // function
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ************************************************************************
//   Stack(Primitive data type) and Heap memory(Non-Primitive datatype)
// for stack we give copy 
// for heap we give reference 

let originalName ="Ram";

let anothername = originalName;
console.log(anothername); // output = Ram
// now we change the value of anothername 
anothername = "Shyam";

console.log(originalName);  // output = Ram
console.log(anothername);   // output = Shyam

// for heap memory example
let ob1 = {
    EmailID : "user@gamil.com",
    upi : "user@ybl"
}
 console.log(ob1.EmailID);  // output = user@gamil.com

let ob2 = ob1;
console.log(ob2.EmailID);  // output = user@gamil.com

ob2.EmailID = "new@gamil.com";
console.log(ob2.EmailID);    // output = new@gamil.com
console.log(ob1.EmailID);   // output = new@gamil.com
 
