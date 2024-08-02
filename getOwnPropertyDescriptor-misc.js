// const descipter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descipter)

// descipter.writable = true
// descipter.enumerable = true
// descipter.configurable = true

// Math.PI = 4

// console.log(Math.PI)

// // const descipter1 = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descipter)
// console.log(Math.PI)

// // Math.PI = 5

// // console.log(Math.PI)

// value of PI doesn't change because it is read only property

const chai = {
    name: 'ginfer chai',
    price: 250,
    isAvailable: true,
    sym : Symbol('chai'),
    orderChai: function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "sym"))
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperties(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false // if enumeration is false we can't iterate the object
})

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }    
}

//Symbol is not enumerable