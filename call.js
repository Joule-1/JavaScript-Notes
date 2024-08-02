function SetUsername(username){
    //comple DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // SetUsername(username)  
    // after SetUsername function is called it is removed from the execution context so its current context is also lost 
    SetUsername.call(this, username)
    // sent current context of createUser
    // whenever we use call, this can be given as an optional argument  this will default to the global object (in non-strict mode) or be undefined (in strict mode).

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);