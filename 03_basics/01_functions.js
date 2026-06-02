function sayMyName (){
    console.log("p")
    console.log("a")
    console.log("l")
    console.log("l")
    console.log("u")
}

// sayMyName()

// *********
                       // pramiter
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

//  const result = addTwoNumber(3, 4);  //try it 

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

 const result = addTwoNumber(3, 4);  //try it 
//  console.log("Result:", result);
// addTwoNumber(3, "4"); // try it 
             // argoments
// addTwoNumber(3, null); 


function loginUserMessage(username = "pallu"){
    //(!username) same output ayega 
    if(username === undefined){
      console.log("please enter a username");
      return
    }
    return `${username} just logged in`
}


//  console.log(loginUserMessage("pallu"));
//  console.log(loginUserMessage("chanchal"));
                        // (... rest oprter)
function calculaterCartPrice(val1, val2, ...num1){  // interview me pucha jayega
    return num1;
}

// console.log(calculaterCartPrice(200, 400, 500, 2000));

// object ko functio kaise change krte hai

const user = {
    username: "pallu",
    prices: 299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "maya",
    price: 399
})

// array pass

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 1000]));



// pratice ke liye code niche hai orignal code auper hai ok

// ==============================
// FUNCTION BASICS
// ==============================

// Function Declaration
function sayMyName (){
    console.log("p")
    console.log("a")
    console.log("l")
    console.log("l")
    console.log("u")
}

// Function call karne par hi code execute hoga
// sayMyName()

/*
NOTE:
Function ek reusable block hota hai.
Jab bhi same kaam baar-baar karna ho tab function use karte hain.

INTERVIEW:
Function Declaration aur Function Expression me difference puchha ja sakta hai.
*/


// ==============================
// PARAMETERS & ARGUMENTS
// ==============================

// Parameters = function ke andar wale variables
// number1 aur number2 parameters hain

function addTwoNumber(number1, number2){

    // Method 1
    // let result = number1 + number2
    // return result

    // Method 2 (Best)
    return number1 + number2
}

// Arguments = function call ke time pass ki gayi values
const result = addTwoNumber(3, 4);

/*
number1 = 3
number2 = 4

Output:
7
*/

// console.log("Result:", result);

// addTwoNumber(3, "4"); // Output: 34
// addTwoNumber(3, null); // Output: 3

/*
NOTE:
JavaScript type coercion karta hai.

3 + "4" = "34"
3 + null = 3

INTERVIEW:
Difference between Parameters and Arguments?
Parameters -> function definition me.
Arguments -> function call ke time.
*/


// ==============================
// DEFAULT PARAMETERS
// ==============================

function loginUserMessage(username = "pallu"){

    // Agar username undefined ho
    if(username === undefined){
        console.log("please enter a username");
        return;
    }

    return `${username} just logged in`
}

/*
Agar call kare:

loginUserMessage()

To username = "pallu" ho jayega
kyunki default value di hui hai.

Output:
pallu just logged in
*/

/*
INTERVIEW:
Default Parameter kya hota hai?

Function parameter ki default value set karna.
Agar user value pass na kare to default value use hogi.
*/


// ==============================
// REST OPERATOR (...)
// ==============================

function calculaterCartPrice(val1, val2, ...num1){

    return num1;
}

// console.log(calculaterCartPrice(200, 400, 500, 2000));

/*

val1 = 200
val2 = 400

Baaki sab values num1 me array ban kar aayengi

num1 = [500, 2000]

Output:
[500, 2000]

*/

/*
INTERVIEW IMPORTANT ⭐

Rest Operator (...)

Multiple arguments ko ek array me collect karta hai.

Example:
function test(...data){
   return data
}

test(1,2,3,4)

Output:
[1,2,3,4]
*/


// ==============================
// OBJECT PASSING IN FUNCTION
// ==============================

const user = {
    username: "pallu",
    prices: 299
}

function handleObject(anyobject){

    console.log(
        `username is ${anyobject.username} and price ${anyobject.price}`
    );
}

// handleObject(user)

handleObject({
    username: "maya",
    price: 399
})

/*

Output:
username is maya and price 399

IMPORTANT:

user object me key hai:
prices

Lekin function me use hua hai:
price

Isliye agar handleObject(user) call karoge to:

Output:
username is pallu and price undefined

kyunki object me "price" naam ki key nahi hai.
*/

/*
Correct Version:

const user = {
   username: "pallu",
   price: 299
}
*/


/*
INTERVIEW:
Object ko direct function me pass kar sakte hain.

handleObject({
   username:"maya",
   price:399
})
*/


// ==============================
// ARRAY PASSING IN FUNCTION
// ==============================

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){

    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

console.log(
    returnSecondValue([200, 400, 100, 1000])
)

/*

Index:
0 -> 200
1 -> 400
2 -> 100
3 -> 1000

Output:
100

*/

/*
INTERVIEW:

Array bhi function me direct pass kar sakte hain.

returnSecondValue([10,20,30,40])

Output:
30
*/

