// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

// 1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// 2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays

const myArr = []

// continuous, Holey

// SMI (small integer)
// Packed Element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]  // if possible => keep array like this, much better performance improvement only numbers not even decimals
// Packed_SMI_Elements (continuous)

// After it become Packed_Double_Element It cannot be converted to Packed_SMI_Elements even after deleteting 6.0
// Once downgraded it cannnot be upgraded


arrTwo.push(6.0)
// Packed_Double_Elements

arrTwo.push("7")
// Packed_Elements

arrTwo[10] = 11
// Holey_Elements

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])

// The empty spaces at position 7, 8, 9 <3 emplty items> that makes the array less optimized

// console.log(arrTwo[9]) these undefined are very costly operations present within bounds (length) of array as holes

// if postion is 19 (out of bound) is will bound check (length = 11) and  return undefined



// How does array find any index value

// 1. bound check

// if postion is 19 (out of bound) is will bound check (length = 11) and  return undefined || easy bound check

// but if position is 9 (under the bound of array but hole(undefined))
// it passes outofbound array check

// After it checks

// hasOwnProperty(arrTwo, 9)    (prototype)
// check if it contains any property with name of 9
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// hasOwnProperty one of the most expensive checks in js    (w.r.t time)

// holes are very expensive in js


const arr3 = [1, 2, 3, 4, 5]
console.log(arr3[8]);   // out of bound return undefined
console.log(arr3[2]);   // in bound,  if no holes present, return value at position || Simple Two step process

// SMI > Double > Packed >
// H_SMI > H_Double > H_Packed

const arr4 = new Array(3);
// just 3 holes.    Holey_SMI_Elements
arr4[0] = "1"   // Holey_Double_Element     Downgraded to last
// No condition is present to convert or upgrade it back
arr4[1] = "2"  // Holey_Double_Element 
arr4[2] = "3"  // Holey_Double_Element 

const arr5 = [] //SMI    // Slightly it is more optimized that arr4 as it doesn't contain any holes
arr5[0] = "1"  // Packed_Elemets    // Slightly it is more optimized
arr5[1] = "2"  // Packed_Elemets 

const arr6 = [1, 2, 3, 4, 5]

arrSix.push(Infinity)   // Packed Double
arr6.push(NaN)          // Packed Double


// for, for-of, forEach or any other loop Uses of these are more prefered,
//  when You try to make forEach yourself or copy method you  have might optimized for few cases but browser has optimized it for much more cases whenerver an apdate comes for browser it increases it optimization further for more cases
// internal javascript methods should be prefered more

// "for, for-of, forEach or any other loop Uses of these are more preferred": Built-in JavaScript loops like for, for-of, and forEach are indeed often preferred for iterating over arrays. They are easy to read, understand, and are optimized by JavaScript engines.

// "when You try to make forEach yourself or copy method you have might optimized for few cases but browser has optimized it for much more cases": This is true. JavaScript engines in browsers are highly optimized for built-in methods. While you might be able to optimize a custom method for a specific case, it's unlikely to be as broadly optimized as the built-in methods.

// "whenever an update comes for browser it increases its optimization further for more cases": This is generally true. JavaScript engine developers continuously work to improve the performance of built-in methods, so they often become more efficient with each new browser version.

// "internal javascript methods should be preferred more": This is a good rule of thumb. Built-in JavaScript methods are usually more efficient, reliable, and easier to understand than custom ones.