// object deceler krne ke tarike chatgpt se smjh lo ok importent
// ye auper ka line apne man se hai ok class ka part nhi hai diyan dena


// singleton


// object.create

// ****************

// object literals
// ***************

const mySym = Symbol("key1")



// ***************



// ***************
const jsUser = {
    name: "pallu",
    "full name": "pallu kumar",
    [mySym]: "mykey1",
    age:  19,
    location: "patna",
    email:  "pallu89@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
    
}

// esko acces kaise kre 

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// *****************

jsUser.email = "kumar@gmail.com";
// Object.freeze(jsUser)
jsUser.email = "maya@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello pallu");
}

jsUser.greetingTwo = function () {
    console.log(`hello pallu ${this.name}`); // string interpolation
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// ****************


// object declare karne ke tarike ChatGPT se samajh lo ✅
// ye upar wali line class ka part nahi hai 🙂

// singleton
// Object.create()

// ****************

// object literals
// ****************

const mySym = Symbol("key1");

// ****************

const jsUser = {
    name: "pallu",                     // normal key
    "full name": "pallu kumar",       // space wali key
    [mySym]: "mykey1",                // symbol key
    age: 19,                          // number value
    location: "patna",                // string value
    email: "pallu89@gmail.com",       // email
    isLoggedIn: false,                // boolean value
    lastLoginDays: ["monday", "sunday"] // array value
};

// object ko access kaise kare

// console.log(jsUser.email);          // dot notation
// console.log(jsUser["email"]);       // bracket notation
// console.log(jsUser["full name"]);   // space wali key access
// console.log(jsUser[mySym]);         // symbol key access

// *****************

jsUser.email = "kumar@gmail.com";     // value overwrite

// Object.freeze(jsUser);             // object freeze kar deta hai

jsUser.email = "maya@gmail.com";      // freeze na ho to value change ho jayegi

// console.log(jsUser);

// *****************

jsUser.greeting = function () {
    console.log("hello pallu");       // simple function
};

// string interpolation + this keyword
jsUser.greetingTwo = function () {
    console.log(`hello pallu ${this.name}`);
};

// function call
console.log(jsUser.greeting());
// output:
// hello pallu
// undefined

console.log(jsUser.greetingTwo());
// output:
// hello pallu pallu
// undefined

// *****************

// Interview Notes 👇

// 1. Object ko 2 tarike se banaya jata hai
//    - Object.create()
//    - Object literals {}

// 2. Symbol key ko [] ke andar likhte hain

// 3. Object.freeze() ke baad
//    - value change nahi hoti
//    - new key add nahi hoti
//    - key delete nahi hoti

// 4. this keyword current object ko refer karta hai

// 5. Agar function kuch return nahi karta
//    to by default undefined return hota hai

// 6. console.log(function()) likhne par
//    function ka returned value print hota hai



