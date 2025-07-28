const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = mynum.map( (num) => {
    return num + 10
})
console.log(newNum);

// NOW WE USE CHAINING

const nums = mynum
                .map( (num) => num*10 ).map( (num) => num + 1);
console.log(nums);

const n = mynum
            .map( (num) => num + 10)
            .map( (num) => num*2)
            .filter( (num) => num >30);
console.log(n);  // [ 32, 34, 36, 38, 40 ]

