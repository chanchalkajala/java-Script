// Form ko select kiya document se
const form = document.querySelector('form');

// Form submit hone par ye function chalega
form.addEventListener('submit', function (e) {
  // Default form submit (page reload) ko rokna
  e.preventDefault();

  // Height input box ki value lekar usko number (integer) me convert kiya
  const height = parseInt(document.querySelector('#height').value);

  // Weight input box ki value lekar usko number (integer) me convert kiya
  const weight = parseInt(document.querySelector('#weight').value);

  // Jahan result show karna hai, wo element select kiya
  const results = document.querySelector('#results');

  // Agar height empty hai, ya negative hai, ya number nahi hai (NaN) -> error dikhao
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;

  // Agar weight empty hai, ya negative hai, ya number nahi hai (NaN) -> error dikhao
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;

  // Dono valid hai to BMI calculate karo
  } else {
    // BMI formula: weight / (height in meters)^2
    // height cm me hai, isliye 100 se divide karke meters me convert kiya
    // toFixed(2) se sirf 2 decimal points tak round kiya
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Category store karne ke liye empty variable banaya
    let category = '';

    // Agar BMI 18.6 se kam hai -> Under Weight
    if (bmi < 18.6) {
      category = 'Under Weight';

    // Agar BMI 18.6 se 24.9 ke beech hai -> Normal Range
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal Range';

    // Baaki sab cases me (24.9 se zyada) -> Overweight
    } else {
      category = 'Overweight';
    }

    // Final result page par BMI value aur uski category ke saath dikhao
    results.innerHTML = `Your BMI is ${bmi} (${category})`;
  }
});