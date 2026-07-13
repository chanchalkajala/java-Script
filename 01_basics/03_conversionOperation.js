// ************************* Conversion Operation *************************

let score = "pallu";

console.log(score, typeof score);
// Note:
// score = "pallu"
// typeof score => string

console.log(score + " kumar", typeof score);
// Note:
// String + String => Concatenate
// Output => "pallu kumar"

console.log(score - 3, typeof score);
// Note:
// String ko number me convert karne ki koshish hoti hai.
// "pallu" number nahi hai.
// Output => NaN

console.log(score * 3, typeof score);
// Note:
// Invalid number conversion.
// Output => NaN

console.log(score / 3, typeof score);
// Note:
// Output => NaN

console.log(score % 3, typeof score);
// Note:
// Output => NaN

console.log(score ** 3, typeof score);
// Note:
// Output => NaN

console.log(score++, typeof score);
// Note:
// String par increment lagane se NaN milta hai.

console.log(score--, typeof score);
// Note:
// String par decrement lagane se NaN milta hai.

console.log(typeof score);
// Note:
// Output => string

let valueInNumber = Number(score);

console.log(valueInNumber, typeof valueInNumber);
// Note:
// Number("pallu") => NaN
// typeof NaN => number

console.log(valueInNumber);
// Note:
// Output => NaN


// ************************************************************
// ******************* Interview Important Notes ***************
// ************************************************************

// 1. JavaScript me 2 types ke conversion hote hain:
//    (i) Explicit Type Conversion
//    (ii) Implicit Type Conversion (Type Coercion)

// 2. Number("3") => 3
// 3. Number("33") => 33
// 4. Number("33abc") => NaN
// 5. Number("abc") => NaN
// 6. Number("") => 0
// 7. Number(" ") => 0

// 8. Number(true) => 1
// 9. Number(false) => 0

// 10. Number(null) => 0
// 11. Number(undefined) => NaN

// 12. Boolean("") => false
// 13. Boolean(" ") => true
// 14. Boolean("Pallu") => true
// 15. Boolean(0) => false
// 16. Boolean(1) => true
// 17. Boolean(null) => false
// 18. Boolean(undefined) => false
// 19. Boolean(NaN) => false

// 20. String(123) => "123"

// 21. typeof NaN => "number"   // Most Asked Interview Question

// 22. "1" + 2 + 3 => "123"
//     Kyuki pehla operand string hai, baaki sab string ban jate hain.

// 23. 1 + 2 + "3" => "33"
//     Pehle addition hota hai, fir string concatenation.

// 24. +true => 1
// 25. +false => 0
// 26. +"" => 0
// 27. +null => 0
// 28. +undefined => NaN

// 29. + operator:
//     - Number + Number => Addition
//     - String + String => Concatenation
//     - Number + String => String Concatenation

// 30. ++x (Pre Increment)
//     Pehle increment hota hai, fir value use hoti hai.

// 31. x++ (Post Increment)
//     Pehle value use hoti hai, fir increment hota hai.

// 32. NaN ka full form = Not a Number

// 33. NaN == NaN => false

// 34. isNaN("33abc") => true
// 35. isNaN("33") => false

// 36. Number.isNaN(NaN) => true
// 37. Number.isNaN("NaN") => false

// 38. JavaScript automatic type conversion ko Type Coercion bolte hain.

// 39. Empty String ("") is Falsy Value.
// 40. Non-Empty String ("Pallu") is Truthy Value.

// ************* Frequently Asked Interview Questions *************

// Q1. typeof NaN kya hota hai ?
// Ans: number

// Q2. Number(undefined) kya return karta hai ?
// Ans: NaN

// Q3. Number(null) kya return karta hai ?
// Ans: 0

// Q4. Boolean("") kya return karta hai ?
// Ans: false

// Q5. Boolean(" ") kya return karta hai ?
// Ans: true

// Q6. Difference between == and === ?
// Ans:
// ==  -> Value compare karta hai (Type Conversion karta hai)
// === -> Value + Data Type dono compare karta hai.

// Q7. Type Coercion kya hota hai ?
// Ans:
// JavaScript ka automatically ek data type ko dusre data type me convert karna.