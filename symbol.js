const mySym = Symbol("key")

const user = {
    name: "Hist",
    age: 14,
    [mySym]: "key1"
};
console.log(typeof user[mySym])     //symbol from object can't be extracted by . notation (obj.mySym)
const user1 = {
    name1: "Histy",
    age1: 5,
    mySym1: "key2"
};
// user.greet = function(){
//     console.log(`Hey,  ${this.name}`);
// } 

// const obj3 = Object.assign({} ,user, user1);
// const obj3 = {...user, ...user1};  //The spread syntax (...) is used to make shallow copies of JavaScript objects. 
// console.log(obj3)

// console.log(user.name)
console.log(user["age"])
// console.log(user[mySym])
// console.log(typeof mySym);
// console.log(user.greet());
// Object.freeze(user);         // prevent further modification of object


const user5 = {
    name1: "Histy",
    age1: 5,
    mySym1: "key2"
};

const {mySym1} = user5;  // de-structure of api
console.log(mySym1)

// // json api

// {
//     "name" : "example",
//     "course" : "js",
//     "price" : "free"
// }