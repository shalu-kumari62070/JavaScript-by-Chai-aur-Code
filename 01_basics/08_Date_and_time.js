// node 01_basics/08_Date_and_time.js
let mydate = new Date();
// console.log(mydate.toString());  // output = Fri Jul 11 2025 13:29:57 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());   // output = Fri Jul 11 2025
// console.log(mydate.toLocaleString());  // output = 7/11/2025, 1:32:01 PM
// console.log(typeof mydate);  // output = object

// note = month start with zero when we use single digit.
// note = when we use double digit (like 01, 02) then month start with 1.
let myCreateDate1 = new Date(2024, 0, 23);
// console.log(myCreateDate1.toDateString());  // output = Tue Jan 23 2024

let myCreateDate2 = new Date(23, 0, 2024);
// console.log(myCreateDate2.toDateString());  // output = Mon Jul 16 1928

let myCreateDate3 = new Date(2024, 0, 23, 5, 6);
// console.log(myCreateDate3.toLocaleDateString());  // output = 1/23/2024
// console.log(myCreateDate3.toLocaleTimeString()); // output = 5:06:00 AM
// console.log(myCreateDate3.toLocaleString());   // output = 1/23/2024, 5:06:00 AM

let myCreateDate4 = new Date(23, 2, 2024);
// console.log(myCreateDate4.toString());  // output =  Thu Sep 13 1928 00:00:00 GMT+0000 (Coordinated Universal Time)


let myCreateDate5 = new Date("2024-02-23");  // "yy-mm-dd"
// console.log(myCreateDate5.toLocaleString())  // output = 2/23/2024, 12:00:00 AM

let myCreateDate6 = new Date("11-07-2025");  // "mm-dd-yy"
// console.log(myCreateDate6.toLocaleString()); // output = 11/7/2025, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp) // this output is in milliseconds so output = 1752243945521
console.log(myCreateDate6.getTime()) // this output is in milliseconds so output = 1762473600000

console.log(Math.floor(Date.now()/1000));  // this is conversion from millisecond to second we dived by thousand
// output = 1752244060

let newDate = new Date();
console.log(newDate.getMonth()) // output = 6
console.log(newDate.getFullYear()); // output = 2025

// note: toLocaleString is very useful beacuse here we can add more method
console.log(newDate.toLocaleString('default', {
    weekday: "long",
})) // output = 2 Friday