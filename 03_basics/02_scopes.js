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

