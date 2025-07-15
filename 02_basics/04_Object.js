// here we discuss about Singleton Object or with the help of constructor
const tinderuser = new Object();  // this is singleton Object
console.log(tinderuser) // output = {}

const user = {};  // this is non-singleton Object
console.log(user);  // output = {}

user.id = "123abc";
user.name = "Sammy";
user.isloggedIn = false;

console.log(user);  // { id: '123abc', name: 'Sammy', isloggedIn: false }

// here write nested object 
const regularuser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname : "ram",
            lastname : "siya"
        }
    }   
}
console.log(regularuser); 
console.log(regularuser["fullname"])  // { userfullname: { firstname: 'ram', lastname: 'siya' } }
console.log(regularuser.fullname.userfullname.firstname);  // ram

// combine two Object
const obj1 = {1: "a", 2: "b"};
const obj2 = {4: "a", 5: "b"};
const obj3 = {6: "a", 7: "b"};

// this is first way to combine object
// const obj4  = {obj1, obj2, obj3};
// console.log(obj4);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '4': 'a', '5': 'b' },  obj3: { '6': 'a', '7': 'b' } }

// this is second way to combine object
// here we use best way to combine object that Object.assign(target, source)
// const obj4 = Object.assign({}, obj1, obj2, obj3);  // here target={}, source=obj1, obj2, obj3
// console.log(obj4);  // { '1': 'a', '2': 'b', '4': 'a', '5': 'b', '6': 'a', '7': 'b' }

// this is third way to combine object
const obj4  = {...obj1, ...obj2, ...obj3};
console.log(obj4);  // { '1': 'a', '2': 'b', '4': 'a', '5': 'b', '6': 'a', '7': 'b' }

// here we write array object
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        name: "Gopal",
        email: "gopal@gmail.com"
    },
     {
        location: "lucknow",
        state: "UP"
    },
]

console.log(users[1].name);  //Gopal

// here we use Object.keys() it store all key into array 
console.log(Object.keys(regularuser));  // [ 'email', 'fullname' ]
console.log(Object.values(regularuser));  // [ 'some@gmail.com', { userfullname: { firstname: 'ram', lastname: 'siya' } } ]
// entries key value ko array ke under array me store karta hai
console.log(Object.entries(regularuser)); // [ [ 'email', 'some@gmail.com' ], [ 'fullname', { userfullname: [Object] } ] ]

console.log(user.hasOwnProperty('id'));  // true
console.log(user.hasOwnProperty('ided'));  // false