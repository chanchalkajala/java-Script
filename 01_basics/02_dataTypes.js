"use strict"  // treat all js code as newer version

// alert(3 + 3);  we are using nodejs,not browser

console.log(3 + 3);
//code readabiltity should be high 
console.log("pallu");


// NOTE
// javascript docomentation website name  tc39.es


//                 importent NOTE

// JavaScript me Data Types 2 main categories me hote hain 👇

// 🔷 1. Primitive Data Types (Basic types)


let name = "pallu";  // String → text
let age = 22;       // Number → number
let isLogin = true; // Boolean → true / false
let x;              // Undefined → value assign nahi hui
let y = null;       // Null → intentionally empty
let big = 1234567890123456789n; // BigInt → bade numbers
let id = Symbol("123");         // Symbol → unique value


// 2. Non - Primitive(Reference Type)
//          👉 Ye complex data store karte hain

  // Object
let user = {
    name: "Pallu",
    age: 22
};

  // Array
let arr = [1, 2, 3];
  
  //  Function
function greet() {
  console.log("Hello");
}



//                      Interview Line:
// 👉 JavaScript me total 7 primitive data types hote hain
// 👉 aur baaki sab object (reference type) hote hain

console.log(typeof x); // undefined interview line
console.log(typeof null); // object interview line