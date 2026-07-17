// class
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Getter
    get email() {
        return this._email.toUpperCase();
    }

    // Setter
    set email(value) {
        this._email = value;
    }

    // Getter
    get password() {
        return `${this._password}maya`;
    }

    // Setter
    set password(value) {
        this._password = value;
    }
}

const pallu = new User("maya@.ai", "abc");

console.log(pallu.email);      // MAYA@.AI
console.log(pallu.password);   // abcmaya
