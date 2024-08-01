let mydate = new Date()
mydate.toLocaleString('default', {
    weekday: "long",
})
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());


let myCreateDate = new Date("01-14-2023");

console.log(Date.now())

// fetches the current date and time from local machine