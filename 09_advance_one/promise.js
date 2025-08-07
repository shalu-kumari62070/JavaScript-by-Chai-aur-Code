// here promise is create
const promise1 = new Promise( function(resolve, reject){       // yaha function ke two part hote hai (i)resolve (ii) reject
    // Do an async task
    // EX- DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();   // for connecting resolve and then we need to call resolve
    },1000);
});  

// now we consume promise
promise1.then(function(){
    console.log('Promise consumed');
});

// Example 2 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000);
}).then(function(){   // Promise ko kisi variable me store nhi kiye hai to directly then laga sakte hai
    console.log("Async 2 resolved");
});


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        // here we pass parameter in resolve
        resolve({username : 'RAM', email : 'ram@example.com'});
    },1000);
});
promise3.then(function(user){
    // here we get value form resolve
    console.log(user);
})

// Example 4
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Siya", password : "1234"});
        }else{
            reject("ERROR: Something went wrong");
        }
    },1000)
});

promise4
.then( (user) => {
    console.log(user);
    return user.username
})
.then( (myusername) => {
    console.log(myusername);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"))

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Siya", password : "1234"});
        }else{
            reject("ERROR: js went wrong");
        }
    },1000)
});

async function consumePromise5(){
    try{
        const response = await promise5();
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromise5();

async function getAllUsers(params) {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E :", error);
    }
}
getAllUsers();

// isi same code by using .then and .catch format me
fetch('https://api.github.com/users/hiteshchoudhary').then((response) =>{
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) =>{
    console.log(error);
})