// generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() *16 )];
    }
    return color;
}

let clearColor
const startChangingColor = function(){
    clearColor = setInterval(changeBgColor,1000);
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    } // is function ko jum startChangingColor ke outside v likh sakte hai
}

const stopChangingColor = function(){
    clearInterval(clearColor);
}

document.querySelector("#Start").addEventListener('click', startChangingColor);
document.querySelector("#Stop").addEventListener('click', stopChangingColor);