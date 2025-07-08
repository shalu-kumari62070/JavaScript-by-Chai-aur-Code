const name = "Siya";
const repocount = 40;
console.log(name + repocount + " Value");
// now we use standard way back tick
console.log(`Hello name is ${name} and my repo count is {repocount}`);

// Another way to declare string using new keyword
const game = new String("I love coding");
console.log(game);

// acces value using index number
console.log(game[1]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('o'));

// const newstr = game.substring(0,4);
// console.log(newstr);
// or
console.log(game.substring(0,4));

// in slice we give negative value
console.log(game.slice(-4));

// now we use trim method
const str = "      xyz     w";
console.log(str);
console.log(str.trim());

// replace method
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));

// include method
console.log(url.includes("hitesh"));
console.log(url.includes("hhh"));

// split method
const s1 = "hello-hii-how";
console.log(s1.split('-'));
