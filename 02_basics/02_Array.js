const fruit = ["apple", "banana", "cherry"];
const color = ["red", "yellow", "green"];

//  node 02_basics/02_Array.js
// fruit.push(color);

// console.log(fruit);        // [ 'apple', 'banana', 'cherry', [ 'red', 'yellow', 'green' ] ]
// console.log(fruit[3]);     // [ 'red', 'yellow', 'green' ]
// console.log(fruit[3][2]);  // green

// concationation return new array
// const all = fruit.concat(color);
// console.log(all);   // [ 'apple', 'banana', 'cherry', 'red', 'yellow', 'green' ]

// add by using spread method
// const allnew = [...fruit, ...color];
// console.log(allnew);  // [ 'apple', 'banana', 'cherry', 'red', 'yellow', 'green' ]

// const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const realarr= anotherarr.flat(Infinity);
// console.log(realarr); 
// output = [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("ramsiya"));  // false
console.log(Array.from("ramsiya"));  // convet string to array
// output = [
//   'r', 'a', 'm',
//   's', 'i', 'y',
//   'a'
// ]

console.log(Array.from({name: "fsdfsdf"}));  // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));   // [ 100, 200, 300 ]
