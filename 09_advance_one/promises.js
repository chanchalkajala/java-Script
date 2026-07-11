// promise 1
const promisesOne = new Promise(function(resolve, reject) {
    // Do an async task
    //DB call,cryptography,network
    setTimeout(function()  {
       console.log(' Do an async task compelete');
       resolve()
    }, 1000);
});

promisesOne.then(function(){
    console.log("promise consumed")
})
// promise 2
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

// promise 3
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "chai", email: "chanchalkajala037@gmail.com" });
    }, 100);
});

promiseThree.then(function(user) {
    console.log(user);
});

// promise 4

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "pallu", password: "7890@pku" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username;
})
.then((username) =>{
console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(() =>("This promise is either resolved or rejected"))

// promise 5