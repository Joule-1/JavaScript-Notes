const myNums = [1, 2, 3]

const initialValue = 0;

// const myTotal = myNums.reduce(function (accumulator, currentValue){
//     console.log(`acc: ${accumulator} and crrVal: ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue)


const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)        // when curly braces are not used for body of function, return keyword is not needed

console.log(myTotal)


const numbers = [10, 20, 30, 40, 50];

const result = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    console.log(`accumulator: ${accumulator}`);
    console.log(`currentValue: ${currentValue}`);
    console.log(`currentIndex: ${currentIndex}`);
    console.log(`array: ${array}`);
    return accumulator + currentValue;              // when curly braces is used for body of function, a new context is started so return keyword is needed
}, 0);

console.log(`result: ${result}`);

/*
The reduce function in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

accumulator: The accumulator accumulates the callback's return values.
currentValue: The current element being processed in the array.
currentIndex (optional): The index of the current element being processed in the array.
array (optional): The array reduce was called upon.

*/