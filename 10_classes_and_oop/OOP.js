   
//    Object literal 

   const user = {
    username: "pallu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        console.log(this)

    }

}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

//- Construructor function
// note  new jo us hua hai oo hmara Construructor function

//  const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome${this.username}`)
    }
    return this
}

const userOne = new User("pallu", 12, true);
const userTwo = new User("palluchanchal", 20, false);

console.log(userOne.constructor);
// console.log(userTwo);

// new kwybord ka note 

// new Keyword — Notes (JavaScript)
// new keyword का use किसी class/constructor function से object (instance) बनाने के लिए होता है।
// new क्या-क्या करता है (Step by Step)
// जब आप new ClassName() लिखते हो, तो JavaScript अंदर 4 काम करता है:

// नया empty object बनाता है → {}
// उस नए object को class के prototype से link करता है
// Constructor function को call करता है, जिसमें this उसी नए object को point करता है
// अगर constructor कोई object return नहीं करता, तो वही नया object automatically return हो जाता है