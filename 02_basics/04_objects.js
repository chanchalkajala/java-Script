/* ==========================================================
   JAVASCRIPT OBJECTS — CLEAN PRACTICE NOTES
   Step by step samjho aur khud terminal/browser console me
   run karke practice karo (node file.js se run hoga)
   ========================================================== */


/* ------------------------------------------------------------
   STEP 1: Object banane ke tarike
------------------------------------------------------------ */

// Object literal (sabse common tarika)
const tinderUser = {};   // ye "non-singleton" object hai
// har baar {} likhoge to ek NAYA object banega

// Object.create() se bhi object banta hai (singleton style)
// const tinderUser2 = new Object();

// Object me property add karna
tinderUser.id = "1234abc";
tinderUser.name = "pallu";
tinderUser.isLoggedIn = false;

console.log("Step 1 -> tinderUser:", tinderUser);


/* ------------------------------------------------------------
   STEP 2: Nested Object (object ke andar object)
------------------------------------------------------------ */

const regularUser = {
    email: "chanchal@gmail.com",
    fullname: {                    // nested object
        userfullname: {
            firstname: "pallu",
            lastname: "kumar"
        }
    }
};

// Access karne ke liye dot (.) notation chain karo
console.log("Step 2 -> firstname:", regularUser.fullname.userfullname.firstname);


/* ------------------------------------------------------------
   STEP 3: Objects ko merge karna (Spread Operator)
------------------------------------------------------------ */

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// GALAT: { obj1, obj2 } likhne se object KE ANDAR object ban jayega
// SAHI tarika 1: Object.assign()
const merged1 = Object.assign({}, obj1, obj2, obj4);

// SAHI tarika 2 (modern, React me sabse zyada use hota): spread operator
const merged2 = { ...obj1, ...obj2, ...obj4 };

console.log("Step 3 -> merged (spread):", merged2);


/* ------------------------------------------------------------
   STEP 4: Array of Objects (real-world API jaisa data)
------------------------------------------------------------ */

const users = [
    { id: 1, email: "maya@gmail.com" },
    { id: 2, email: "kumar@gmail.com" },
    { id: 3, email: "pallu@gmail.com" },
];

// Array index se object nikalo, fir uski property access karo
console.log("Step 4 -> users[1].email:", users[1].email);


/* ------------------------------------------------------------
   STEP 5: Object ke built-in Methods
------------------------------------------------------------ */

console.log("Step 5 -> Object.keys():", Object.keys(tinderUser));
// output: array of keys -> ['id', 'name', 'isLoggedIn']

console.log("Step 5 -> Object.values():", Object.values(tinderUser));
// output: array of values -> ['1234abc', 'pallu', false]

console.log("Step 5 -> Object.entries():", Object.entries(tinderUser));
// output: array ke andar [key, value] pairs ka array

console.log("Step 5 -> hasOwnProperty:", tinderUser.hasOwnProperty("isLoggedIn"));
// output: true / false -> key exist karti hai ya nahi ye check karta hai


/* ------------------------------------------------------------
   STEP 6: Object Destructuring
------------------------------------------------------------ */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pallu"
};

// Normal access:
// course.courseInstructor

// Destructuring + renaming (courseInstructor -> instructor)
const { courseInstructor: instructor } = course;
console.log("Step 6 -> instructor:", instructor);

// Bina rename kiye normal destructuring:
const { coursename, price } = course;
console.log("Step 6 -> coursename, price:", coursename, price);


/* ------------------------------------------------------------
   STEP 7: React me destructuring kaise use hota hai (concept)
------------------------------------------------------------ */

// Props seedha destructure kar lete hain function parameter me hi:
// const Navbar = ({ company }) => {
//     return <h1>{company}</h1>
// }
// Navbar({ company: "pallu" })


/* ------------------------------------------------------------
   STEP 8: JSON format (API data isi tarah aata hai)
------------------------------------------------------------ */

// JSON me keys hamesha double-quotes me hoti hain:
// {
//     "name": "pallu",
//     "coursename": "js in hindi",
//     "price": "free class"
// }

// Array of empty objects (structure practice ke liye):
const arrayOfObjects = [{}, {}, {}];


/* ==========================================================
   QUICK INTERVIEW REVISION POINTS
   ==========================================================
   1. Object banane ke 2 tarike -> {} literal, Object.create()
   2. Nested object -> dot (.) notation se access hota hai
   3. Spread (...) aur Object.assign() -> dono object merge karte hain
   4. Object.keys()    -> array of keys
   5. Object.values()  -> array of values
   6. Object.entries() -> array of [key, value] pairs
   7. hasOwnProperty() -> key check karta hai (true/false)
   8. Destructuring    -> React aur API handling me bahut important
   9. JSON keys/values mostly string hoti hain
   ========================================================== */