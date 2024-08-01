console.log("first line");

let str1 = "33";

let value = String(str1);
console.log(typeof value);
console.log(value);

console.log(1/0 + "\n");


// Important *************************************************************************
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(undefined >= 0); // false
console.log(2 === 2)

//primitive
// string  number boolean null undefined symbol bigInt

//non-primitive(reference)

//Array, Objects, Functions

const score = 100;
console.log("hey");

const bigNum = 45656545484656255555n

const id = Symbol(12);
const anotherId = Symbol(45);

console.log(id == anotherId);

//Symbols are a primitive data type in JavaScript that are used to create unique identifiers. Even if you create two symbols with the same description, they are not equal to each other.

const heros = ["one", "2", "four"];

let myObj = {
    name: "adf",
    age: 45
}

const myFunction = function(){
    console.log("Hello\nLast Line");
}
console.log(typeof myFunction) // object function

console.log(id);

// These non-primitive types are called "reference" types because they are accessed by reference, rather than by value. If you assign a non-primitive value to a variable and then assign that variable to another variable, both variables will point to the same value.