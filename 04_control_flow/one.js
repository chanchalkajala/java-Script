// if
const isUserloggedIn = true
const temperature = 41
// if (temperature === 40) {
//     console.log("less then 50")


// } else {
//     console.log("temperature is greater than 50");

// }

// <, >, <=, >=, ==, !=, ===, !== 

// note scope se releted code

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`)

// }

//     console.log(`user power: ${power}`)

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less then 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900")

// } else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){     // Agar dono condition true hongi tabhi result true aayega.
    console.log("Allow to buy course");

}if(loggedInFromGoogle ||  loggedInFromEmail ){  // Agar ek bhi condition true ho, to result true aata hai
  console.log("user logged in")
}

