// singleton

// const tinderUser = new Object();  // singleton object
const tinderUser = {}  // non singleton object


tinderUser.id = "1234abc",
tinderUser.name = "pallu",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// *************

const regularUser = {
    email: "chanchal@gmail.com",
    fullname:{
        userfullname:{
            firstname: "pallu",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); 

// **********

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

// *******

const users = [
    {
        id: 1,
        email: "maya@gmail.com"
    },
    {
        id: 1,
        email: "maya@gmail.com"
    },
    {
        id: 1,
        email: "maya@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // output deta type array 
// console.log(Object.values(tinderUser));  
// console.log(Object.entries(tinderUser));  // array ke ander array

// console.log(tinderUser.hasOwnProperty(`isLoggedin`));

// arrary ki Destructure hame khud padhna hai chatgpt se smjh ke ok 

// object ki Destructure ***********

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pallu"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // yeha pr Destructure hua hai  es name badl kr courseInstructor ye name kiya hai instructor hai eski hm bolte hai  Destructure ok

console.log(instructor);


// ****** react ke bare me

// const navbar = ({company}) => {

// }

// navbar (company = "pallu")

// *****

// {
//     "name": "pallu",
//     "coursename", "js in hindi",
//     "price": "free class"
// }

[

    {},
    {},
    {}
]


//  ************ eska niche ka code mera mn se hai studay ke liye


// singleton

// const tinderUser = new Object();  
// singleton object banata hai

const tinderUser = {};  
// non-singleton object
// object literal method

// **********************

// object me value add karna

tinderUser.id = "1234abc";     
// id add ki

tinderUser.name = "pallu";     
// name add ki

tinderUser.isLoggedIn = false; 
// boolean value add ki

// console.log(tinderUser);

// **********************

// nested object

const regularUser = {
    email: "chanchal@gmail.com",

    fullname: {                 // nested object
        userfullname: {

            firstname: "pallu",
            lastname: "kumar"

        }
    }
};

// nested object access
// console.log(regularUser.fullname.userfullname.firstname);

// **********************

// object merge

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}
// ye object ke andar object bana deta

// Object.assign method
// const obj3 = Object.assign({}, obj1, obj2);

// spread operator
const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);

// spread operator React aur modern JS me bahut use hota hai

// **********************

// array ke andar objects

const users = [
    {
        id: 1,
        email: "maya@gmail.com"
    },
    {
        id: 2,
        email: "kumar@gmail.com"
    },
    {
        id: 3,
        email: "pallu@gmail.com"
    },
];

// array ke object access
users[1].email;

// **********************

// Object methods

// console.log(tinderUser);

// Object.keys()
// object ki sari keys deta hai
// output ka type array hota hai

// console.log(Object.keys(tinderUser));

// Object.values()
// sari values deta hai

// console.log(Object.values(tinderUser));

// Object.entries()
// array ke andar array return karta hai

// console.log(Object.entries(tinderUser));

// hasOwnProperty()
// check karta hai key exist karti hai ya nahi

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// **********************

// array destructure khud practice karna 🙂

// object destructuring
// **********************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pallu"
};

// normal access
// course.courseInstructor

// destructuring
const { courseInstructor: instructor } = course;

// yaha courseInstructor ka naam chhota karke
// instructor kar diya gaya hai

console.log(instructor);

// **********************
// React Notes
// **********************

// React me props destructuring bahut use hota hai

// const navbar = ({company}) => {

// }

// yaha direct props destructure hua hai

// navbar(company = "pallu")

// **********************
// JSON format
// **********************

// API data mostly JSON format me aata hai

// {
//     "name": "pallu",
//     "coursename": "js in hindi",
//     "price": "free class"
// }

// array of objects

[
    {},
    {},
    {}
]

// **********************
// Interview Notes
// **********************

// 1. Object banane ke 2 tarike
//    - Object.create()
//    - Object literals {}

// 2. Nested object ko . notation se access karte hain

// 3. Spread operator (...) object merge me use hota hai

// 4. Object.keys() array return karta hai

// 5. Object.entries() array inside array return karta hai

// 6. hasOwnProperty() key check karta hai

// 7. Destructuring React aur API handling me bahut important hai

// 8. JSON me keys aur values mostly string me hoti hain

// 9. Spread operator interview me frequently pucha jata hai

// 10. Object.assign() aur spread operator dono object merge karte hain