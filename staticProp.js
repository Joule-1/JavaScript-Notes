class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}
// static function can only be used without an object
const hitesh = new User("hitesh")

// console.log(hitesh.createId())       // give a error, static function can only be used without an object
console.log(User.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)                 // super is used to call the parent class constructor
        this.email = email
    }


}

const iphone = new Teacher("iphone", "iphone@.com")

// console.log(iphone.createId())