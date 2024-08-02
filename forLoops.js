            // forIn loop
            
console.log('forIn loop')
const myobj = {
    js: 'javascript',
    nest:{
        py: 'python',
        java: 'java'
    },
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myobj) {                                 //forin
    console.log(myobj[key])                  //object transversal through forin
}

// for (const key in pro) {
//     console.log(key)          //print keys 0 1 2 3 4
// }

// for (const key in pro) {
//     console.log(pro[key])        // print array values
// }

            // forOf loop

const arr = [1, 2, 3, 4, 5]

// // for (const iterator of object) { //forof
//             // here object means on which loop to be applied eg array, string
// // }
console.log("forOf loop")
for (const num of arr) {
    console.log(num)
}

// // const greetings = "Hello World"
// // for (const greet of greetings) {
// //     console.log(`Each char is ${greet}`)
// // }

            //forEach loop
const mycoding = [
    {
        langName : "JavaS",
        langFile : "js"
    },
    {
        langName : "C++",
        langFile : "cpp"
    },
    {
        langName : "Python",
        langFile : "py"
    }
]

console.log("forEach loop")
mycoding.forEach( (item) => {
    console.log(item.langName)
})

const coding = ["js", "ruby", "java", "py", "cpp"]
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )






















































// // const coding = ["js", "ruby", "java", "py", "cpp"]

// // const values = coding.forEach((item) => {
// //     return item     // foreach does not return anything
// // })

// // console.log(values)

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const  newNums = mynums.filter( (num) => num > 4) // returns

// const  newNNums = mynums.filter( (num) => {
//     // num > 4 // doesn't return            // scope started by curly braces
//     return num > 4 // now returns
// }) // returns

// console.log(newNNums)


const newNums = []

mynums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)       // for returning through foreach
    }
})

console.log(newNums)