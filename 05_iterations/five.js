const coding =["js", "ruby", "java", "Python"];
// Noote : call back function me name nhi hota so here we cannot give name to function

// first method
// coding.forEach( function (item) {
//     console.log(item);
// })

// second method
//  here we use ARROW function
// coding.forEach( (item) =>{
//     console.log(item);
// })

// third method
// here we function and then apply on coding by usin forEach 
function printme(item){
    // console.log(item);
}
coding.forEach(printme);  // here we give reference not call function

// fourth method but here we print item, index, arr
coding.forEach( (item, indexedDB, arr) => {
    console.log(item, indexedDB, arr)
})

const mycoding = [
    {
        languageNme : "javascript",
        languageFileName : "js"
    },
    {
        languageNme : "java",
        languageFileName : "java"
    },
    {
        languageNme : "Python",
        languageFileName : "py"
    }
]
mycoding.forEach( (item) => {
    console.log(item.languageFileName);
})