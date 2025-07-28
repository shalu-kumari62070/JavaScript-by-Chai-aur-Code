// here we firstly diccuss for of loop

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    console.log(i);
}

const greet = "Hello world";
for (const i of greet) {
    console.log(`Each char is ${greet}`);
}

// Map is Object that holds key-value pairs and remembers the original insertion of the keys. Map does not contain dublicate value.
// Map is not ietrable so we can not use forin loop on Map
const m = new Map();
m.set('IN', "India");
m.set('USA', "United States of America");
m.set('Fr', "France");
console.log(m);
// output =
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

// Now we use forOf loop on Map
for (const key of m) {
    console.log(key);
}
// output =
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

// NOW WE PRINT KEY AND VALUE
for (const [key, val] of m) {
    console.log(key, ":-", val);
}
// output =
// IN :- India
// USA :- United States of America
// Fr :- France

const Obj = {
    'game1' : 'SpiderMan',
    'game2' : 'Badminton'
}

// Note : we can not use forOf loop on Object.
// for Object we use forin loop
