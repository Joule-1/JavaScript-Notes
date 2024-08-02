// java script and classes
//OOP


// Object
// collection of properties and methods


// why use OOP

//parts of OOP

// Object literal

// Constructor Function
// Prototypes
// Classes
// Instances(new, this)

// 4 Pillars
/*
Abstraction
Encapsulation
Inheritance
Polymorphism
*/



const user = {
    username: "hitesh",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log(this.username)
        // console.log("Get Details From Database")
        // consosle.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// const promiseOne = new Promise()
// // Constructor function is used to create new context
// const data = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

// const userOne = User("hitesh", 5, true)
// const userTwo = User("chai", 50, false)

// console.log(userOne)

const userOne = new User("hitesh", 5, true)
const userTwo = new User("chai", 50, false)
console.log(userOne.constructor)
console.log(userTwo)


console.log(userTwo instanceof User)
/*
    when new keyword is used an empty object is created which is called instance
    constructor function is called because of new keyword it takes all the the arguments and pack in it
    all the arguments written with this keyword is injected in it (append in it)
*/

// read instanceOf keyword