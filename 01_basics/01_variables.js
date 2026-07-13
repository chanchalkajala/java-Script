const accountId = 244455;
let accountEmail = "pallu@gmail.com";
var accountPassword = "567897";
accountCity = "Patna";
let accountState;

// accountId = 2; ❌ Not Allowed

// accountEmail = "chanchal@gmail.com";
// accountPassword = "1234";

accountCity = "Sheikhpura";

console.log(accountCity);

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);

// ======================================================
//                    INTERVIEW NOTES
// ======================================================

// 1. const
// ➤ Used when the value should NOT change.
// ➤ Must be initialized at the time of declaration.
// ➤ Cannot be reassigned.

// 2. let
// ➤ Used when the value may change.
// ➤ Block Scoped.
// ➤ Preferred over var.

// 3. var
// ➤ Function Scoped.
// ➤ Can be redeclared and reassigned.
// ➤ Avoid using var because of scope-related issues.

// 4. Variable without keyword
// ➤ accountCity = "Patna";
// ➤ Creates a global variable (not a good practice).
// ➤ Always use let, const, or var.

// 5. Undefined
// ➤ let accountState;
// ➤ Value = undefined
// ➤ Type = undefined

// 6. console.log()
// ➤ Prints a single value in the console.

// 7. console.table()
// ➤ Displays data in table format.
// ➤ Best for arrays and objects.

// 8. Data Types
// ➤ accountId       -> number
// ➤ accountEmail    -> string
// ➤ accountPassword -> string
// ➤ accountCity     -> string
// ➤ accountState    -> undefined

// 9. Interview Questions
// Q. Difference between let, const, and var?
// A.
// const -> Cannot be reassigned.
// let   -> Can be reassigned, Block Scoped.
// var   -> Can be reassigned, Function Scoped (Avoid).

// Q. Why should we avoid var?
// A. Because of function scope and redeclaration issues.

// Q. What is the default value of an uninitialized variable?
// A. undefined

// Q. Which keyword is preferred in modern JavaScript?
// A. const and let.