if (true){
    let a =10; // this is block scope
    const b = 20;
    var c = 30;
    console.log(a); // 10
}
// console.log(a);  this gives error (a is not define);
// console.log(b);  this gives error (b is not define);
console.log(c);  // 30 this is not give error beacuse we use var keyword
// but var keyword is not good for better code
console.log(a); // 300;

// Global scope
let a = 300; // this is global scope
