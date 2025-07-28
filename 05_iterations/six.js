const coding =["js", "ruby", "java", "Python"];

const values = coding.forEach( (item) => {
    console.log(item);
})
console.log(values);  // output = undefined

// NOTE : forEach does not return value
// NOTE : filter return value
// NOTE : but if you want to return value form forEach or store so another way use
const c =[];
coding.forEach( (item) =>{
    c.push(item);
})
console.log(c);  // [ 'js', 'ruby', 'java', 'Python' ]

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNum = mynum.filter( (num) => num > 4)
// or
let newNum = mynum.filter( (num) => {
    return num > 4
}) // NOTE : here we use curly braces so it is important to use return key word other we get in output empty array
console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userbook = books.filter( (bk) => {
    return bk.genre === 'History';
})
console.log(userbook);

const yr = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History" })
console.log(yr);

