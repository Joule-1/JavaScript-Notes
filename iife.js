// Immediately Invoked Function Expression (IIFE)

// Remove of pollution of global scope   Interference due to global scope variables

(function iife(){
    console.log("Immediately Executed")
})();

//(function definition)(used for execution call)

// use semi colon to end line to stop context of iifi function

( () => {
    console.log("Arrow function IIFE")
})();


((name) =>{
    console.log(`My Name is ${name}`)
})("Hogwarts");
