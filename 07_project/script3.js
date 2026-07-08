// 'clock' naam ke element ko HTML se select kar rahe hain (id="clock")
const clock = document.getElementById('clock');

// setInterval ek function ko baar baar chalata hai, given time gap (yahan 1000ms = 1 second) ke baad
setInterval(function () {
  // har second naya Date object bana rahe hain, jisme current date & time hoga
  let date = new Date();

  // date object se sirf time (hours:minutes:seconds) nikal ke,
  // user ke local format me convert kar rahe hain
  // aur clock element ke andar text ke roop me set kar rahe hain
  clock.textContent = date.toLocaleTimeString();
}, 1000); // 1000ms yani 1 second ka interval, isliye time har second update hota hai