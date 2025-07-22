// Immediately Invoked Function Expressions (IIFE);

// NOTE: it is used to prevent from global scope (means global scope se jo pollution milta hai use bachne ke liye, or prevent from global scope pollute)
// NOTE: When we use IIFE must use line termination(;) without this we get error because compiler doesn't know where stope context
// SYNTAX: (here we write function definition)(here we call function);  here semicolon is must important

(function (){  // It is called Simple IIFE because here we don't give name to function
   console.log("here we study about IIFE")
}) ();

// OR

(function hello(){  // It is called Named IIFE because here we give name to function
    console.log("here we study about IIFE")
}) ();

//  // It is called UnNamed IIFE
( () => console.log("here we gain knowledge realted to IIFE means how to prevent from global scope pollution"))();

( (name) => {   // It is called Parameter IIFE
    console.log(`hii my name is ${name}`);
})('IIFE');  // hii my name is IIFE

// NOTE: AISE LIKNAE KO HI TWO IIFE BOLTE HAI