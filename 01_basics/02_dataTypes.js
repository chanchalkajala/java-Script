"use strict" // treat all JS code as newer version
// NOTE: Pehle "use Strict" tha (typo) — ab lowercase kar diya taaki strict mode
// actually activate ho jaaye. JS case-sensitive hai.

console.log(3 + 3);
// NOTE: Number + Number = Number. Output: 6 (simple addition)

console.log("pallu");
// NOTE: String print, bas string as-is print hota hai

console.log("5" + 3);
// NOTE: Type coercion — string + number = string. Output: "53" (concatenation, addition nahi)

console.log("5" + "3");
// NOTE: String + String = String. Output: "53" (concatenation)

let x;

x = 5;
// NOTE: Strict mode on hone ki wajah se x pehle "let" se declare karna zaroori tha,
// warna "x is not defined" error aata

console.log(x);
// NOTE: x ki current value print karega → 5


let name = "pallu";
let age = 22;
let isLoggedIn = false;
let y = null;
let bigNumber = 1234567890123456789012345678901234567890n;
let symbol = Symbol("This is my symbol");
// NOTE: 7 primitive data types ke examples — String, Number, Boolean,
// Undefined (x), Null (y), BigInt, Symbol


console.log(typeof name, age, isLoggedIn, x, y, bigNumber, symbol);
// NOTE: Sirf "name" par typeof lagega, baaki sab apni raw value print karenge
// (typeof sirf ek hi expression ke aage kaam karta hai)

console.log(typeof age);
// NOTE: Output: "number"

console.log(typeof isLoggedIn);
// NOTE: Output: "boolean"

console.log(typeof x);
// NOTE: Output: "number" (5 assign ho chuka hai ab)

console.log(typeof y);
// NOTE: Output: "object" — JS ka famous bug, null actually object nahi hai

console.log(typeof bigNumber);
// NOTE: Output: "bigint"

console.log(typeof symbol);
// NOTE: Output: "symbol"


console.table({
    name: typeof name,
    age: typeof age,
    isLoggedIn: typeof isLoggedIn,
    x: typeof x,
    y: typeof y,
    bigNumber: typeof bigNumber,
    symbol: typeof symbol
});
// NOTE: Object banaya jisme har key ki value uska "type" hai (name ki value nahi).
// console.table ise ek clean table format me terminal/console me dikhata hai


console.table([
  { variable: "name", value: name, type: typeof name },
  { variable: "age", value: age, type: typeof age },
  { variable: "isLoggedIn", value: isLoggedIn, type: typeof isLoggedIn },
  { variable: "x", value: x, type: typeof x },
  { variable: "y", value: y, type: typeof y },
  { variable: "bigNumber", value: bigNumber, type: typeof bigNumber },
  { variable: "symbol", value: symbol, type: typeof symbol },
]);
// NOTE: Array of objects — har object ek row banega, aur variable/value/type
// teeno columns table me dikhenge (value aur type dono ek saath dekhne ke liye best)


// object 

let user = {
    name: "pallu",
    age: 22,
    isLoggedIn: false,
    email: "chanchal@gmail.com"
}
console.table(user);
// NOTE: Single object — console.table har property ko ek row banata hai
// (key = index column, value = Values column)

// Array 

let arr = [1, 2, 3, 4, 5, "pallu", null, undefined, { name: "pallu" }, [1, 2, 3]];
console.log(arr);
// NOTE: Array me mixed data types ho sakte hain — numbers, string, null,
// undefined, ek object, aur ek nested array — sab ek hi array me valid hai


// ============================================
//              INTERVIEW LINES
// ============================================

// 1) "5" + 3 → "53" hota hai, 8 nahi — kyunki string ke saath number
//    coerce (convert) ho jaata hai string me. Type coercion kehte hain isse.

// 2) "use strict" hamesha lowercase me likhna hota hai, warna strict mode
//    silently activate nahi hota aur JS purane rules follow karta hai.

// 3) typeof null → "object" deta hai, jabki actual me null ek primitive
//    hai. Ye JS ka ek purana, na-fix-hone-wala bug hai (backward compatibility
//    ki wajah se).

// 4) JavaScript me total 7 primitive data types hote hain:
//    String, Number, Boolean, Undefined, Null, BigInt, Symbol
//    Baaki sab (Object, Array, Function) non-primitive / reference type hain.

// 5) typeof hamesha ek STRING return karta hai (jaise "number", "string"),
//    khud value nahi — isliye typeof x === "number" jaisi checks chalti hain.

// 6) typeof variable ki CURRENT value ka type batata hai, uske declaration
//    ka nahi — agar value badal jaaye, typeof ka result bhi badal jaayega.