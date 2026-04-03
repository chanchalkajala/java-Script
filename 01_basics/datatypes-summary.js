// primitiv detatype

// types of 7 : string, Number, Bollearn, null, Undefined, symbol,BigInt

//const score = 100;
//const scroreValue = 100.3;

//const isLoggedIn = false;
//const outsideTem = null;
//let userEmail;

const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2); // false 😎


const bigNumber = 34567876543n




//    NOTE IMPORTENT INTERVIEW QS 
// 👉 JavaScript ek Dynamic Language hai ✅
// 🔍 Matlab kya hota hai?

// 👉 Tum variable ka type manually define nahi karte
// 👉 Type automatically change ho sakta hai

// reference (Non primitive)

// Array, Objects, Funcation

const heros = ["mithun", "ajay", "sahru"];

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);