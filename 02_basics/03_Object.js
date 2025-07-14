//  singleton (means constructor)
// onject.create

// here we learn object literal

const my = Symbol("hello");

const jsuser = {
    name : "abc",
    // here name is treated as String (means ("name") ny compiler)
    "full name" : "abcxyz";
    // here we give anything in the place of name(like - 1, 2, etc);
    age : 20,
    location : Lucknow,
    eamil : "abc@gamil.com",
    isloggedIn : false,
    lastLoginDays : ["Monday", "Saturaday"],
    // my : "how", // but type of my is String so this is wrong because it is not use as Symbol so use as symbol we my under Square bracket
    [my] : "how"  // my use as symbol
}

// now we acces the method
console.log(jsuser.eamil);
// or_con
console.log(jsuser["eamil"]);  //this is best way to access
console.log(jsuser["full name"]);
// if we use console.log(jsuser.full name) it give error.

console.log(jsuser[my]);

// here we override
jsuser.eamil = "adcdf@gamil.com" ;

// if we do not want to change value so we use freeze
// Object.freeze(jsuser); 

jsuser.greeting = function(){
    console.log("hello JS user");
}
console.log(jsuser.greeting);
console.log(jsuser.greeting()); // output = undefined

jsuser.greeting1 = function(){
    console.log(`hello JS user ${this.name}`);
}
console.log(jsuser.greeting1);
console.log(jsuser.greeting1()); // output = undefined