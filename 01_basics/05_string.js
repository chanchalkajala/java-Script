const name = "pallu";
const repoCount = 50;
//console.log(name + repoCount + "value");


// esko string polesion bola jta hai
console.log(`hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String('chanchal');
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt("4"));
console.log(gameName.indexOf("h" , 2));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-8,5);
console.log(anotherString);
