const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//Chaining

const newNums = myNumers
                        .map( (num) => num * 10)        // multiply each number by 10 in myNumers
                        .map( (num) => num + 1)         // add 1 to each number of the result of the previous map
                        .filter( (num) => num >= 40)    // filter out numbers less than 40 from the result of the previous map
                                                        // newNums only contains numbers greater than or equal to 40

console.log(newNums)    //  [41, 51, 61, 71, 81, 91, 101]

// map and filter are methods provided by the Array prototype in JavaScript. 
// They are used to transform and filter arrays respectively. 
// The map method transforms each element of an array using a callback function and returns a new array with the transformed elements. 
// The filter method filters an array based on a condition specified in a callback function and returns a new array with the filtered elements.