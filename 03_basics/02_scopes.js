// shopes kijye 

// NOTE: => Ye Global Scope me declare hua hai, kyunki ye kisi function ya block {} ke andar nahi hai.
// var c = 300
let a = 300


// note:=> Is code ko Block Scope kehte hain kyunki variables { } ke andar declare kiye gaye hain.
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER:", a);

}


// console.log(a);
// console.log(b);
// console.log(c);

// nested scope **********

function one(){
    const username = "pallu"

    function two(){
        const website = "youtub"
       // console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtub"
       // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ intersting +++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

// +++++++++++++++++++++++++++++++++++++++++++



// ================== SCOPE ==================

// Global Scope
// NOTE:
// Global Scope me declare kiye gaye variables program ke kisi bhi part se access kiye ja sakte hain.

var c = 300      // Global Scope
let a = 300      // Global Scope

// Block Scope
// NOTE:
// { } ke andar declare kiye gaye let aur const sirf us block ke andar hi accessible hote hain.

if (true) {
    let a = 10       // Block Scope
    const b = 20     // Block Scope
    var c = 30       // var block scope follow nahi karta

    // console.log("INNER:", a); // 10
}

// console.log(a); // 300
// console.log(b); // Error: b is not defined
// console.log(c); // 30

/*
INTERVIEW QUESTION:

Q. Difference between let, const and var?

let:
- Block Scope
- Reassign kar sakte hain
- Redeclare nahi kar sakte

const:
- Block Scope
- Reassign nahi kar sakte
- Redeclare nahi kar sakte

var:
- Function Scope
- Redeclare aur Reassign dono kar sakte hain
- Hoisting ki wajah se bugs create karta hai
- Modern JS me avoid karna chahiye
*/


// ================== NESTED SCOPE ==================

function one() {

    const username = "pallu"

    function two() {

        const website = "youtube"

        // Child function parent ke variables access kar sakta hai
        // console.log(username);
    }

    // Parent child ke variables access nahi kar sakta
    // console.log(website); // Error

    two()
}

// one()

/*
INTERVIEW QUESTION:

Q. Lexical Scope kya hota hai?

Answer:
JavaScript me child function apne parent function ke variables
access kar sakta hai. Is behavior ko Lexical Scope kehte hain.
*/


// ================== NESTED IF ==================

if (true) {

    const username = "hitesh"

    if (username === "hitesh") {

        const website = " youtube"

        // console.log(username + website);
        // Output: hitesh youtube
    }

    // console.log(website);
    // Error: website block scope me hai
}

// console.log(username);
// Error: username block scope me hai


/*
INTERVIEW QUESTION:

Q. Kya inner block outer block ke variables access kar sakta hai?

Yes

Q. Kya outer block inner block ke variables access kar sakta hai?

No
*/


// ================== HOISTING ==================

console.log(addone(5)) // 6

function addone(num) {
    return num + 1
}


/*
Function Declaration

Ye hoisting ki wajah se function define hone se pehle bhi call ho sakta hai.
*/


addTwo(5) // Error

const addTwo = function(num) {
    return num + 2
}


/*
Function Expression

Ye hoisting me poora function available nahi hota.

Actual Error:
ReferenceError: Cannot access 'addTwo' before initialization

Kyuki addTwo ek const variable me store hai.

Sahi Code:

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5)); // 7
*/


// ================== MOST IMPORTANT INTERVIEW POINTS ==================

/*

1. Global Scope vs Block Scope

2. let, const, var difference

3. Lexical Scope

4. Nested Functions

5. Hoisting

6. Function Declaration vs Function Expression

7. Why var should be avoided?

Answer:
var block scope follow nahi karta aur unexpected bugs create kar sakta hai.

8. Why addone() works before declaration?

Answer:
Function Declaration hoisting ke time memory me store ho jata hai.

9. Why addTwo() fails before declaration?

Answer:
Ye Function Expression hai jo const variable me store hai.
Initialization se pehle access nahi kar sakte.

*/