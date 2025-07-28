const mynums = [1, 2, 3, 4];
const mytotal = mynums.reduce( function(accumulator, cuurrentValue) {
    console.log(`acc : ${accumulator} and curr : ${cuurrentValue}`); // this is to know value
    return accumulator + cuurrentValue
}, 0)
// note intial value accumulator ki zero hogi and then jo sum aayega wo usme pass hota chala jayega
console.log(mytotal);

// by using arrow function
const total = mynums.reduce( (accumulator, cuurrentValue) => {
    console.log(`acc : ${accumulator} and curr : ${cuurrentValue}`);
    const val = (accumulator + cuurrentValue)
    return val;
},0)
console.log(total);

const shoppingCart = [
    {
        itemName : "java course",
        price : 1000
    },
    {
        itemName : "py course",
        price : 2000
    },
    {
        itemName : "html course",
        price : 3000
    },
    {
        itemName : "c++ course",
        price : 4000
    },
]

const sum = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(sum);