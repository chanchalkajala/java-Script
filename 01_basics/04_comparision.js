// ************************ null Comparison ************************

// 📌 null ka matlab hai "Intentional Empty Value"
// Developer ne jaan-bujhkar value ko empty rakha hai.

// Rule:
// >, <, >=, <=  → Comparison ke time JavaScript null ko Number (0) me convert karta hai.
// ==            → null sirf undefined ke equal hota hai.
// ===           → Value + Type dono check karta hai.

console.log(null > 0);     
// Output: false
// Conversion:
// null → 0
// 0 > 0 → false

console.log(null == 0);    
// Output: false
// Reason:
// == me null ko 0 ke equal nahi mana jata.
// null sirf undefined ke equal hota hai.

console.log(null >= 0);    
// Output: true
// Conversion:
// null → 0
// 0 >= 0 → true

console.log(null < 0);
// Output: false
// Conversion:
// null → 0
// 0 < 0 → false

console.log(null <= 0);
// Output: true
// Conversion:
// null → 0
// 0 <= 0 → true


// ******************************** Interview Note ********************************
//
// null == 0      // false
// null > 0       // false
// null >= 0      // true
//
// 👉 Reason:
// == aur Comparison Operators alag-alag rules follow karte hain.


// ************************ undefined Comparison ************************

// 📌 undefined ka matlab hai
// Variable declare hua hai, lekin usme koi value assign nahi hui.

// Rule:
// Comparison ke time JavaScript undefined ko Number me convert karta hai.
// undefined → NaN (Not a Number)
// NaN ke saath koi comparison true nahi hota.

console.log(undefined == 0);
// Output: false
// undefined kisi Number ke equal nahi hota.

console.log(undefined > 0);
// Output: false
// Conversion:
// undefined → NaN
// NaN > 0 → false

console.log(undefined < 0);
// Output: false
// Conversion:
// undefined → NaN
// NaN < 0 → false

console.log(undefined >= 0);
// Output: false
// Conversion:
// undefined → NaN
// NaN >= 0 → false

console.log(undefined <= 0);
// Output: false
// Conversion:
// undefined → NaN
// NaN <= 0 → false


// ******************************** Extra Practice ********************************

console.log(Number(null));
// Output: 0
// Number() null ko 0 bana deta hai.

console.log(Number(undefined));
// Output: NaN
// Number() undefined ko NaN bana deta hai.

console.log(typeof null);
// Output: "object"
// ⚠️ JavaScript ka Historical Bug

console.log(typeof undefined);
// Output: "undefined"


// ******************************** Interview Notes ********************************

// ⭐ null == undefined      // true
// ⭐ null === undefined     // false (Type different)
// ⭐ Number(null)           // 0
// ⭐ Number(undefined)      // NaN
// ⭐ typeof null            // "object"
// ⭐ typeof undefined       // "undefined"

// ⭐ Best Practice:
// Real Projects me equality check ke liye hamesha === aur !== use karo.
// == unexpected type conversion kar sakta hai.


// ******************************** Practice ********************************

// Pehle output guess karo, phir Inspect Console me run karo.

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log(null > 0);            // false
console.log(null >= 0);           // true
console.log(null <= 0);           // true

console.log(undefined == 0);      // false
console.log(undefined > 0);       // false
console.log(undefined < 0);       // false
console.log(undefined >= 0);      // false

console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

console.log(typeof null);         // object
console.log(typeof undefined);    // undefined