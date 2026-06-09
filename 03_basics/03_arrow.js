const user = {
    username: "pallu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to my website`); // this crentconset ko refer krta hai 
         console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "maya"
// user.welcomeMessage()

// console.log(this) // output is empety value

// function chai (){
//     let username = "maya"
//     console.log(this.username);
// }

// chai()

// const chai  = function () {
//     let username = "maya"
//     console.log(this.username);
// }

// chai()
// const chai  = function () {
//     let username = "maya"
//     console.log(this.username);
// }

// chai() 

const chai  = ()  =>  {
    let username = "maya"
    console.log(this);
}

// chai()

// basics arrow function
 // NOTE ➡️ Explicit Return ✅
// const addTwo = (num1, num2) => { // es me ager Curly Brace us kiye to return likhna hi hoga
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));


// Isko Implicit Return bolte hain. ✅
const addTwo = (num1, num2) =>    num1 + num2;

const addTwo = (num1, num2) =>    (num1 + num2);
// auger mujhe object retun krna hota to 
const one = (num1, num2) =>   ( {username: "pallu"});
  


console.log(addTwo(3, 4));

// ++++++++++++++++++++++

// ======================= THIS KEYWORD =======================

// Object ke andar this current object ko refer karta hai

const user = {
    username: "pallu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to my website`);

        // this => current object
        console.log(this);
    }
}

// user.welcomeMessage()

// Object ki value change kar rahe hain
// user.username = "maya"

// user.welcomeMessage()


// Global scope me this

// Browser me => Window Object
// Node.js me => Empty Object {}

// console.log(this);



// ======================= NORMAL FUNCTION =======================

// Function ke andar this object ko refer nahi karta

function chai() {
    let username = "maya"

    // undefined
    console.log(this.username);
}

// chai()


/*
INTERVIEW QUESTION

Q. Kya function ke andar this.username use kar sakte hain?

Answer:
Nahi

this object ke context me kaam karta hai,
normal function ke local variables ke saath nahi.
*/



// ======================= FUNCTION EXPRESSION =======================

const chai = function () {
    let username = "maya"

    console.log(this.username);
}

// chai()

/*
Output:
undefined

Reason:
this local variable ko access nahi karta.
*/



// ======================= ARROW FUNCTION =======================

const chai = () => {
    let username = "maya"

    console.log(this);
}

// chai()

/*
INTERVIEW QUESTION

Q. Arrow Function me this kya hota hai?

Answer:
Arrow Function apna khud ka this nahi banata.

Ye parent scope ka this inherit karta hai.
*/



// ======================= ARROW FUNCTION RETURN =======================


// ---------- Explicit Return ----------

// Curly Braces {} use kiya hai
// Isliye return likhna zaruri hai

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 4)); // 7


/*
NOTE:

{} => Return keyword compulsory
*/



// ---------- Implicit Return ----------

// Ek hi line hai
// return automatically ho jata hai

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(3, 4)); // 7


/*
NOTE:

Return keyword ki zarurat nahi
*/



// ---------- Implicit Return using Parentheses ----------

const addTwo = (num1, num2) => (
    num1 + num2
);

console.log(addTwo(3, 4)); // 7


/*
NOTE:

() => Implicit Return

Interview me bahut pucha jata hai.
*/



// ======================= OBJECT RETURN =======================

// Object return karna ho to object ko () me wrap karna padega

const one = () => (
    {
        username: "pallu"
    }
);

console.log(one());



/*
Output:

{
  username: 'pallu'
}

IMPORTANT:

Wrong ❌

const one = () => {
    username: "pallu"
}

Correct ✅

const one = () => (
    {
        username: "pallu"
    }
)

Reason:
JavaScript {} ko block samajhta hai,
object nahi.
*/


// interview line

// this object ke andar current context ko refer karta hai

// Normal Function apna this banata hai

// Arrow Function apna this nahi banata

// {} => Explicit Return (return likhna padega)

// () => Implicit Return (return automatic)

// Object return karna ho to ({})