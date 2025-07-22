// NOTE 1: THREE TYPES OF EXECUTION CONTEXT
// (i): GLOBAL EXECUTION CONTEXT or GLOBAL ENVIRONMENT (ii): FUNCTION EXECUTION CONTEXT (iii): EVAL EXECUTION CONTEXT
// EVAL EXECUTION CONTEXT is property of global object 
// NOTE 2: Global execution context ko this keyword ke under me rakha jata (window object for browser object) and it all are exeute under THREAD
// NOTE 3: Javascript is a single thread 
// NOTE 4: Code run in two phase (i): MEMORY CREATION PHASE OR CREATION PHASE (ii): EXECUTION PHASE
// NOTE 5: In MEMORY CREATION PHASE(MCP) only memory ke under me space allocate hota hai jo v humne variable, jo v humne declare kiya hai uske liye space allocate hota (execute nhi hota hai).
// NOTE 6: In EXECUTION PHASE execute our code (means jo v humne mathematical operation and koi v operation jo humne declare kiya hai execute hota hai).

// EXAMPLE FOR UNDERSTANDIG GLOBAL EXECUTION
let val1 = 10;
let val2 = 5;
function addnum(num1, num2){
    let total = num1+num2;
    return total;
}
let result1 = addnum(val1, val2);
let result2 = addnum(4,5);

// STEP 1: GLOBAL EXECUTION
// STEP 2: MEMORY PHASE
// val1 -> undefined
// val2 -> undefined
// addnum -> undefined
// result1 -> undefined
// result2 -> undefined

// STEP 2: EXECUTION PHASE
// val1 <- 10
// val2 <- 5
// addnum -> (new variable environment + execution thread) means yaha ye box create hota hai iske under me v again memory phase and execution phase create hota hai
// (i)  memory phase
// val1 -> undefined
// val2 -> undefined
// toatl -> undefined
// (ii) execution phase
// num -> 10
// num -> 5
// total -> 15
// fianlly total return ho jata GLOBAL EXECUTION KO
// AND THEN (new variable environment + execution thread) delete ho jata hai

// again this process repeat for result2

// +++++++++++++++++++++  CALL STACK ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// STEP TO UNDERSTAND CALL STACK
// GO ON CHROME > click right (and then inspect) > click on SOURCE > WRITE YOUR CODE(MEANS funciton);