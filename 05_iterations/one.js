// FOR LOOP
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

// EXAMPLE 1
for (let i = 1; i < 4; i++) {
    console.log(`Outer Loop value : ${i}`);
    for (let j = 1; j < 4; j++){
        console.log(`Inner Loop value : ${j} and Outer Loop value : ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// EXAMPLE 2
let myarray = ["Apple", "Banana", "Mango"]
console.log(myarray.length) // 3
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

// break and continue
// break
for (let index = 0; index <=20; index++) {
    if(index == 6){
        console.log(`Detected 6`);
        break;
    }
    console.log(`value of i is ${index}`);
}

// continue
for (let index = 0; index <=20; index++) {
    if(index == 6){
        console.log(`Detected 6`);
        continue;
    }
    console.log(`value of i is ${index}`);
}
