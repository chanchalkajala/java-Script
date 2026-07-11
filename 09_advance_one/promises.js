// promise 1
const promisesOne = new Promise(function (resolve, reject) {
    // Do an async task
    //DB call,cryptography,network
    setTimeout(function () {
        console.log(' Do an async task compelete');
        resolve()
    }, 1000);
});

promisesOne.then(function () {
    console.log("promise consumed")
})
// promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});

// promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chanchalkajala037@gmail.com" });
    }, 100);
});

promiseThree.then(function (user) {
    console.log(user);
});

// promise 4

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
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
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    }).finally(() => ("This promise is either resolved or rejected"))

// promise 5

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javaScript", password: "7890@pku" });
        } else {
            reject('ERROR: js went wrong');
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/chanchalkajala')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
    
// }
// getAllUser()


fetch('https://api.github.com/users/chanchalkajala')
.then((response) => {
return response.json()
})
.then((data)=>{
    console.log(data)
} )
.catch((error)=> console.log(error))