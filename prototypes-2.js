// let myName = "hitesh           "
// let myChannel = "chai          "

// console.log(myName.truelength);      // returns (length - spaces)

// let myHero = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log("I am present in all objects")
// }

// // heroPower.hitesh();
// // myHero.hitesh()


// /*But if something is injected to array then it will be present in object or not */

// Array.prototype.heyHitesh = function(){
//     console.log("Hitesh says Hello")
// }


// myHero.heyHitesh() // it has access

// // heroPower.heyHitesh()       // it doesn't have access


// // inheritance

// // old approach (outdated less used)

// const User = {
//     name : "Chai",
//     email: "chai@google.com"
// }

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
// console.log("hey")
console.log(TASupport.isAvailable)
// Teacher.__proto__ = User


// // modern aproach

Object.setPrototypeOf(TeachingSupport, Teacher)  // TeachingSupport is child of Teacher and TeachingSupport inherits all the properties and methods of Teacher
console.log(TeachingSupport.makeVideo)
// console.log(TeachingSupport)

// let anotherUsernmae = "ChaiAurCode        "

// String.prototype.truelength = function(){
//     // console.log(this)
//     // console.log(this.name) //obslete property
//     console.log(`True length is: ${this.trim().length}`)
// }

// anotherUsernmae.truelength()

// "hitesh".truelength()
// "iceTea".truelength()