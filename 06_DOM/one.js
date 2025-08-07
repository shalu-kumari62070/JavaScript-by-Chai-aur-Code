document.getElementById("title") // it return all value
document.getElementById("title").id // it only id value
document.getElementById("title").id.class // it return undefined
document.getElementById("title").id.className // it return only class value because in js we write className
document.getElementById("title").getAttribute // it is fucction
document.getElementById("title").getAttribute(`class`) // it return only class value
document.getElementById("title").getAttribute('id')  // it only id value
document.getElementById("title").setAttribute('class', 'test'); // it always overwrite so previous className will be change 
document.getElementById("title").setAttribute("class", 'test', 'heading'); // it does not overwrite so previous className will be same and add new className test
let val =  document.getElementById("title") // here we store value in vall becuse we want to perform so some style operation
val.style.backgroundColor = "green";
val.style.padding = "15px";

val.innerHTML // it return all value of html(like -tag ,value)
val.textContent // it return all text code
val.innerText // it does not show all text code (means hidden thing)

document.getElementsByClassName('heading') // it retun HTML Collection

document.querySelector('h2'); // it return match h2
document.querySelectorAll('h2');   // it return all matching h2
document.querySelector("#title");
document.querySelector(".heading");

document.querySelector('input[type="password"]'); // it is use to select input tag
const myul = document.querySelector('ul'); // it selects all unordered list
const turngrn = myul.querySelector('li'); // it select first matching list
turngrn.style.backgroundColor = "green";
turngrn.style.padding = "10px";

document.querySelectorAll('li'); // it return NodeList 
const templiList = document.querySelectorAll("li"); // here we store in value and it also return NodeList
templiList.style.color = "green"; // this is not apply because it is NodeList not an Array
// if we want to change color and  want to perform some operations 
templiList[0].style.color = "green";  // here change the color (only one ka color change hoga)

const myh1 = document.querySelectorAll('h1'); // it also return NodeList
myh1[0].style.color = "red";

// NOTE : querySelectorAll RETURN NodeList
// NOTE : NodeList pe hum forEach ka use karte Map ka nhi kyu ki NodeList array nhi hai
// NOTE : If you want to apply map on NodeList then you must change into Array after you can apply map on NodeList

templiList.forEach( (item) => {
    return item.style.backgroundColor = "pink";
})

document.getElementsByClassName("list-item"); // it return HTML Collection
const tempClasslist =  document.getElementsByClassName("list-item");
// NOTE : getElementsByClassName RETURN HTML Collection
// NOTE : HTML Collection pe hum forEach ka use nhi kar sakte hai 
// NOTE : If you want to apply forEach on HTML Collection then you must change into Array after you can apply forEach on HTML Collection

// HOW TO CONVERT HTML COLLECTION INTO ARRAY
Array.from(tempClasslist); // here HTML COLLECTION into array

const myConvertedArray = Array.from(tempClasslist); // here only we store value in variable
myConvertedArray.forEach( function (li) {
    li.style.color = "orange";
})



