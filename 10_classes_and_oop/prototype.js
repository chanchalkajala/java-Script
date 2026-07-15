// let myName = "pallu     "
// //console.log(myName.trim().length); hm es console se only myName bla code ka acces kr skte hai dono ko nhi
// let myChannel = "pallu     "

// console.log(myName.trueLength);

// array se khani suru krte hai

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pallu = function(){
    // console.log(`pallu is present in all objects`);
}

Array.prototype.palluk = function(){
console.log(`palluk says hello`);
}

// heroPower.pallu()
myHeros.pallu()
// myHeros.palluk()
// heroPower.palluk()

// inheritance

const User = {
 name: "pallu",
 email: "pallu@gmail.com"
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "palluchanchal     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"pallu".trueLength()
"iceTea".trueLength()