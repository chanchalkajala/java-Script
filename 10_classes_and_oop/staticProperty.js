class User {
    constructor(usename){
        this.usename = usename
    }
    logMe(){
        console.log(`Username: ${this.usename}`);
    }

   static createdId(){
        return `123456789`
    }
}

const pallu = new User ("pallu")
// console.log(pallu.createdId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();