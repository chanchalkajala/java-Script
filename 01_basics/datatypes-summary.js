// primitiv detatype

// types of 7 : string, Number, Bollearn, null, Undefined, symbol,BigInt

//const score = 100;
//const scroreValue = 100.3;

//const isLoggedIn = false;
//const outsideTem = null;
//let userEmail;

const id1 = Symbol('123');
const id2 = Symbol('123');

//console.log(id1 === id2); // false 😎


const bigNumber = 34567876543n




//    NOTE IMPORTENT INTERVIEW QS 
// 👉 JavaScript ek Dynamic Language hai ✅
// 🔍 Matlab kya hota hai?

// 👉 Tum variable ka type manually define nahi karte
// 👉 Type automatically change ho sakta hai

// reference (Non primitive)

// Array, Objects, Funcation

// const heros = ["mithun", "ajay", "sahru"];

// const myFunction = function(){
//     console.log("hello world");
// }

//console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++ inter views me pucha jayega 
// 1. => stack memory hm use krte hai (priitive)   2. =>heap memory (Non-primitive)
//Note :- 📦 Stack Memory → Copy hota hai         2. 🧠 Heap Memory → Reference hota hai


let myName = "pallukumar";
let anotherName = "apnamaya"
console.log(anotherName)
console.log(myName)


// Object (Heap Memory Example)
let userOne = {
  email: "pallu12@gmail.com",
  upi: "user@ybl"
};

// Reference copy
let userTwo = userOne;

// Change through userTwo
userTwo.email = "maya@gmail.com";

// Output
console.log(userOne.email); // maya@gmail.com
console.log(userTwo.email); // maya@gmail.com