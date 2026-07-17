// object

const User = {
    _email: 'pallu@gmail.com',
    _password: "abcd",

    get email(){
        return this._email.toUpperCase()
    },
    set password(value){
        this._email = value
    }
}

const tea = Object.create(User);
console.log(tea.email);