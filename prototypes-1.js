//default behaviour of js is prototypel bheaviour if js doesn't find something your trying to find in the object it will look for it in the prototype of the object
// check increasingly in the upward layers(parents, grand parents ....) till it does not get null value

// prototype give access to new keyword, classes, this, prototypel inheritance or inheritance

function multipleby5(num){
    return num*5
}

multipleby5.prototype.power = 2

console.log(multipleby5(5))
console.log(multipleby5.prototype.power)
console.log(multipleby5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
    // return username
}

createUser.prototype.increment = function(){
    this.score++;
    console.log(this.score)
}

//prototype is not require to use as it is managed by javascript internally as there can be multiple protypes as shown in the browser

createUser.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)     // new keyword is used to create a new object and a new current context
// const tea = createUser("tea",  250)

// console.log(tea);                           // no context is created so undefined
// console.log(chai);                          // context is created so object is printed
// chai.increment()

// new keyword 
/*
    Here's what happens behind the scenes when the new keyword is used: 

    A new object is created: The new keyboard initiates the creation of a
    new javScript object

    A prototype is linked: The newly created objects gets linked to the
    prototype property of the constructor function. This means that it has 
    access to the properties and methods defined on the constructor's 
    prototype.

    JS doesn't give constructor function not through classes but through
    new keyboard

    The constructor is called: The constructor function is called with the 
    specified arguments and this is bound to the newly created abject. If 
    no explicit return value is specified from the constructor, JS assumes
    this, the new created object, to be the intented return value. 
 */

    