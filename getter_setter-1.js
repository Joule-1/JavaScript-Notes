class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase()

        // return `${this._password}chai`       //to decieve actual password
    }

    set password(value){
        this._password = value
        // this.password = value.toUpperCase() // this cause the maximum stack overflow as the constructor and setter both try to set the value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value;
    }

}

const hitesh = new User("h@hitesh0ai,", "abc")
console.log(hitesh.password)
console.log(hitesh.email)