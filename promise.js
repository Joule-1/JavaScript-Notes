// // // // Creation

const { response } = require("express");

// // // // Promise take inputs as callback which contain resolve and reject as parameters 

// // // const promise1 = new Promise(function(resolve, reject){
// // //     // Do an async task
// // //     // DB calls, cryptography, network

// // //     setTimeout(function(){
// // //         console.log('Async task 1 is complete')
// // //         resolve()
// // //     }, 2000)
// // // })

// // // //then is connected with resolve

// // // promise1.then(function(){
// // //     console.log("Promise 1 consumed")
// // // })


// // // new Promise(function(resolve, reject){
// // //     setTimeout(function(){
// // //         console.log("Async task 2")
// // //         resolve()
// // //     }, 2000)
// // // }).then(function(){
// // //     console.log("Async 2 resolved")
// // // })


// // // const promise3 = new Promise(function(resolve, reject){
// // //     setTimeout(function(){
// // //         console.log("Task 3 ")
// // //         resolve({username : "Chai", email : "chai@example.com"})
// // //     }, 2000)
// // // })

// // // promise3.then(function(user){
// // //     console.log(user)
// // // })


// // const promise4 = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         let error = false

// //         if(!error){
// //             resolve({username : "Code", email : "chai@eeee.com"})
// //         }
// //         else{
// //             reject("ERROR: Something Went Wrong")
// //         }
// //     },1000)
// // })

// // promise4.then((user) => {
// //     console.log(user);
// //     return user.username
// // })
// // .then((username) => {
// //     console.log(username);
// // })
// // .catch(function(error){
// //     console.log(error);
// // })
// // .finally(() => console.log("The promise is either resolved or rejected"))


// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "js", password: "123"})
//         }else{
//             reject("Error: JS went wrong")
//         }
//     }, 1000)
// })

// async function consumePromise5(){
//     try{
//         const response = await promise5
//         console.log(response)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consumePromise5()

// async function getAllUsers(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json(); // takes time
//     console.log(data)
//     // console.log(response);
//    }catch(error){
//     console.log("E: ", error)
//    }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))