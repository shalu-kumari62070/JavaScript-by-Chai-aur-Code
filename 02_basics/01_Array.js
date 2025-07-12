// Array
// note: JavaScript array-copy operations create shallow copies.
// note: A shallow copy of an object is a copy whose properties share the same references
// note: A deep copy of an object is a copy whose properties do not share the same references

// decleration of array
const myArr = [1,2,3,4];
const arr = [1, 3, 5, "true", "false"];
const arr1 = [["a"], ["b"],[0]];

const arr2 = new Array(1,2,3,"A", "hello");
console.log(arr2[4]);  // output = hello

// Array methods
myArr.push(8);
console.log(myArr); // output = [ 1, 2, 3, 4, 8 ]
myArr.pop();
console.log(myArr); // output = [ 1, 2, 3, 4]

myArr.unshift(9);
console.log(myArr); // output = [ 9, 1, 2, 3, 4 ]
myArr.shift();
console.log(myArr); // output = [ 1, 2, 3, 4 ]

console.log(myArr.includes(9));  // output = false
console.log(myArr.indexOf(5)); // output = -1

console.log(myArr.includes(3));  // output = true
console.log(myArr.indexOf(2)); // output = 1

// convert array to string
const newarr = myArr.join();
console.log(newarr);   // output = 1,2,3,4
// console.log(typeOf newarr)  // output = String

//  slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);  // output = [ 2, 3 ]

const myn2 = myArr.splice(1,3);
console.log("B", myArr);  // output = B [ 1 ]
console.log(myn2); // output = [ 2, 3, 4 ]
