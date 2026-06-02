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

handleObject(user)