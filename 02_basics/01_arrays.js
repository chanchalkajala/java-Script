// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["palluchanchal", "chanchalkajala"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// **********
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// **********


// **********

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);








// ********************** ye code studay ke liye copy past hai orijanl code auper hai okk


// ==============================
// ARRAY IN JAVASCRIPT
// ==============================

// Normal Array
const myArr = [0, 1, 2, 3, 4, 5]

// String Array
const myHero = ["palluchanchal", "chanchalkajala"]

// Array Constructor Method
const myArr2 = new Array(1, 2, 3, 4)

// INTERVIEW QUESTION ⭐
// Difference between:
// []  ---> Array Literal
// new Array() ---> Array Constructor

// console.log(myArr[1]);
// NOTE:
// Array index starts from 0
// myArr[1] => 1



// =====================================
// ARRAY METHODS
// =====================================


// ********** push() & pop() **********

// myArr.push(6)
// NOTE:
// push() adds value at END of array

// myArr.push(7)

// myArr.pop()
// NOTE:
// pop() removes LAST value from array

// console.log(myArr);



// =====================================


// ********** unshift() & shift() **********

// myArr.unshift(9)
// NOTE:
// unshift() adds value at START
// BUT performance thodi slow ho sakti hai
// because saare indexes shift hote hain

// myArr.shift()
// NOTE:
// shift() removes FIRST value from array

// console.log(myArr.includes(7));
// NOTE:
// includes() checks value exists or not
// OUTPUT => true / false

// INTERVIEW QUESTION ⭐
// includes() return kya karta hai ?
// Answer => Boolean value (true/false)


// console.log(myArr.indexOf(3));
// NOTE:
// indexOf() returns position/index of value

// Agar value nahi mile to OUTPUT => -1

// INTERVIEW QUESTION ⭐
// indexOf() value na mile to kya return karta hai ?
// Answer => -1



// =====================================
// join()
// =====================================

// const newArr = myArr.join()

// NOTE:
// join() array ko STRING me convert karta hai

// console.log(myArr);
// console.log(typeof newArr);

// INTERVIEW QUESTION ⭐
// join() ka return type kya hota hai ?
// Answer => String



// =====================================
// slice() vs splice()
// MOST IMPORTANT INTERVIEW QUESTION ⭐
// =====================================

console.log("A", myArr);

// OUTPUT:
// A [0, 1, 2, 3, 4, 5]


// ================= slice() =================

const myn1 = myArr.slice(1, 3);

// NOTE:
// slice(start, end)
// END index include nahi hota

// Index 1 => 1
// Index 2 => 2

// OUTPUT => [1, 2]

// IMPORTANT:
// slice() ORIGINAL array ko change nahi karta

console.log(myn1);

console.log("B", myArr);

// OUTPUT:
// B [0, 1, 2, 3, 4, 5]

// NOTE:
// Original array same hai



// ================= splice() =================

const myn2 = myArr.splice(1, 3);

// NOTE:
// splice(start, count)

// Start from index 1
// Remove 3 values

// Removed values => [1, 2, 3]

// IMPORTANT:
// splice() ORIGINAL array ko MODIFY karta hai

console.log("C", myArr);

// OUTPUT:
// C [0, 4, 5]

// NOTE:
// Original array change ho gaya

console.log(myn2);

// OUTPUT:
// [1, 2, 3]



// =====================================
// FINAL DIFFERENCE
// =====================================

// slice()
// ✅ Original array change nahi karta
// ✅ End index include nahi hota

// splice()
// ✅ Original array ko modify karta hai
// ✅ Count ke according values remove hoti hain


// MOST ASKED INTERVIEW QUESTION ⭐
// Difference between slice() and splice()

// **********************