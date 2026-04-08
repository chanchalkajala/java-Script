// ===============================
// 🔹 BASIC VARIABLES
// ===============================
const name = "pallu";
const repoCount = 50;

// ❌ Old way (not recommended)
// console.log(name + repoCount + "value");

// ✅ Modern way (String Interpolation / Template Literals)
console.log(`hello my name is ${name} and my rep count is ${repoCount}`);
// 👉 Interview Note: ES6 feature hai (backticks `` use hote hain)


// ===============================
// 🔹 STRING OBJECT
// ===============================
const gameName = new String('chanchal-kajala-offical');

// 👉 Character access
console.log(gameName[1]);
// 👉 Interview: string indexing start hota hai 0 se

// 👉 Prototype (methods access)
console.log(gameName.__proto__);
// 👉 Interview: saare string methods prototype se aate hain

// 👉 Length of string
console.log(gameName.length);
// 👉 Interview: spaces bhi count hote hain

// 👉 Uppercase conversion
console.log(gameName.toUpperCase());
// 👉 Interview: original string change nahi hota (immutable)

// 👉 Character at position
console.log(gameName.charAt("4"));
// 👉 Interview: index number hona chahiye (string bhi pass kar sakte ho but number hi use karo)

// 👉 Index of character
console.log(gameName.indexOf("h" , 2));
// 👉 Interview: 2 ka matlab search start index


// ===============================
// 🔹 STRING METHODS (IMPORTANT)
// ===============================

// 👉 substring(start, end)
const newString = gameName.substring(0,5);
console.log(newString);
// 👉 Interview: negative value ignore hoti hai

// 👉 slice(start, end)
const anotherString = gameName.slice(-8,5);
console.log(anotherString);
// 👉 Interview: negative index support karta hai


// ===============================
// 🔹 URL OPERATIONS
// ===============================
const url = "https://pallu.com/pallu%30maya";
console.log(url);

// 👉 Replace text
console.log(url.replace(".com", ".in"));
// 👉 Interview: first match replace hota hai

// 👉 Check substring present or not
console.log(url.includes("chanchal"));  // false
console.log(url.includes("maya"));      // true
// 👉 Interview: case-sensitive hota hai


// ===============================
// 🔹 STRING → ARRAY
// ===============================
console.log(gameName.split("-"));
// 👉 Interview: split() string ko array me convert karta hai


// ===============================
// 🔹 TYPE CHECK
// ===============================
console.log(typeof(gameName));
// 👉 Interview: "object" aata hai kyuki new String() use hua hai
// 👉 Important: "pallu" (primitive) vs new String() (object)