const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6],7, [6, 7, [4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("pallu"));
console.log(Array.from("pallu"));
console.log(Array.from({name: "pallu"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



// ******************** ye code copy past hai orignal code auper hai ok

// ============================================
// MERGE ARRAYS IN JAVASCRIPT
// ============================================

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];



// ============================================
// push()
// ============================================

// marvel_heros.push(dc_heros);

// NOTE:
// push() array ke andar pura array add kar deta hai
// Means nested array ban jata hai

// OUTPUT:
// [
//   'thor',
//   'Ironman',
//   'spiderman',
//   ['superman', 'flash', 'batman']
// ]

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// NOTE:
// marvel_heros[3] => pura dc_heros array
// [1] => flash

// OUTPUT => flash


// INTERVIEW QUESTION ⭐
// push() se array merge karne par kya hota hai ?
// Answer => Nested Array ban jata hai



// ============================================
// concat()
// ============================================

// const allHeros = marvel_heros.concat(dc_heros);

// NOTE:
// concat() do arrays ko merge karta hai
// NEW array return karta hai

// console.log(allHeros);

// OUTPUT:
// ['thor', 'Ironman', 'spiderman',
//  'superman', 'flash', 'batman']


// INTERVIEW QUESTION ⭐
// concat() original array ko modify karta hai ?
// Answer => NO



// ============================================
// SPREAD OPERATOR (...)
// ============================================

const all_new_heros = [...marvel_heros, ...dc_heros];

// NOTE:
// Spread operator array values ko spread/unpack karta hai

// MOSTLY modern JavaScript me isi ka use hota hai

// console.log(all_new_heros)

// OUTPUT:
// ['thor', 'Ironman', 'spiderman',
//  'superman', 'flash', 'batman']


// INTERVIEW QUESTION ⭐
// concat() vs spread operator difference ?
// ⭐ Spread operator modern & easy syntax hai



// ============================================
// flat()
// ============================================

const another_array = [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [6, 7, [4, 5]]
];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// NOTE:
// flat() nested arrays ko single array me convert karta hai

// Infinity means:
// kitna bhi deep nested array ho sabko flat karo

// OUTPUT:
// [
// 1, 2, 3, 4, 5, 6,
// 7, 6, 7, 4, 5
// ]


// INTERVIEW QUESTION ⭐
// flat(Infinity) ka use kya hai ?
// Answer => Deep nested arrays ko flatten karna



// ============================================
// Array.isArray()
// ============================================

console.log(Array.isArray("pallu"));

// NOTE:
// Check karta hai value array hai ya nahi

// OUTPUT => false

// Because "pallu" ek string hai


// INTERVIEW QUESTION ⭐
// Array.isArray() kya return karta hai ?
// Answer => Boolean (true/false)



// ============================================
// Array.from()
// ============================================

console.log(Array.from("pallu"));

// NOTE:
// String ko array me convert karta hai

// OUTPUT:
// ['p', 'a', 'l', 'l', 'u']



console.log(Array.from({name: "pallu"})); // interesting

// NOTE:
// Object ko directly array me convert nahi kar paaya

// OUTPUT => []

// IMPORTANT:
// Hume batana padega:
// keys chahiye ya values

// Example:
// Array.from(Object.keys(obj))
// Array.from(Object.values(obj))


// MOST ASKED INTERVIEW QUESTION ⭐
// Array.from({name: "pallu"}) empty array kyu deta hai ?
// Answer => Because object iterable nahi hota directly



// ============================================
// Array.of()
// ============================================

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// NOTE:
// Multiple values ko array me convert karta hai

// OUTPUT:
// [100, 200, 300]


// INTERVIEW QUESTION ⭐
// Array.of() ka use kya hai ?
// Answer => Different values se new array banana



// ============================================
// IMPORTANT SUMMARY ⭐
// ============================================

// push()  => Nested array bana sakta hai
// concat() => Arrays merge karta hai
// spread (...) => Modern merge syntax
// flat() => Nested array flatten
// Array.isArray() => Check array or not
// Array.from() => Convert into array
// Array.of() => Create array from values
