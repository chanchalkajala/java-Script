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

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// *****************

