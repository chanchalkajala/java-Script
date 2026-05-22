// Dates object

let myDate = new Date()

// current full date & time
console.log(myDate.toString());

// only date show
console.log(myDate.toDateString());

// local date & time
console.log(myDate.toLocaleString());

// interview question
// Date ka type = object
console.log(typeof myDate);



// custom date create
let myCreateDate = new Date(2024, 0, 23);

// custom readable date
console.log(myCreateDate.toDateString());



// custom date with time
let myCreateDate2 = new Date(2024, 0, 23, 5, 3);

// local format with time
console.log(myCreateDate2.toLocaleString());



// string format date
let myCreateDate3 = new Date("2026-06-23");

// best format = YYYY-MM-DD
console.log(myCreateDate3.toLocaleString());



// current timestamp
let myTimeStamp = Date.now();

console.log(myTimeStamp);



// specific date timestamp
console.log(myCreateDate.getTime());



// milliseconds → seconds
console.log(Math.floor(Date.now()/1000));



// current date object
let newDate = new Date()

console.log(newDate);



// current month
console.log(newDate.getMonth() + 1);



// current day
console.log(newDate.getDay());



// custom weekday name
newDate.toLocaleString('default', {
    weekday: "long"
})