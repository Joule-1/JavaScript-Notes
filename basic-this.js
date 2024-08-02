// function calculatorPrice(val1, val2, ...num1){   // ...num1 is rest operator as well as spread operator for now it is rest
//     return num1;
// }

// console.log(calculatorPrice(200, 400, 500, 2000)) //convert into array rest opeartor

// this keyword is used to refer to current context(values)

// console.log(this)  // returns empty object

// console.log(this) // in browser it returns window object

// const user = {
//     username: "Chai",
//     price : 999,

//     welcome: function(){
//         console.log(`${this.username}`) //chai
//     }
// }
// user.welcome();

// function chai(){
//     let username = "hey"
//     console.log(this.username)      // only works with object || it gives undefined with functions
// }

// chai()


// const chai= () => {
//     let username = "hey"
//     console.log(this.username)      // only works with object || it gives undefined with functions
// }

// chai()


const name = (num1, num2) => {
    return num1 + num2
}

const name1 = (num1, num2) => (num1 + num2)     // Implicit return

const name2 = (num1, num2) => ({username: "hey"})  // for objs

console.log(name2())