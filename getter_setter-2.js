const User = {
    _email: 'h@h.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}

const tea = Object.create(User)     // create object on the basis of User and refer it in tea

console.log(tea.email)