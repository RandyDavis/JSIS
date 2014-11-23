// var elUsername = document.getElementById('username');   // Username input
// var elMsg = document.getElementById('feedback');   // Error msg element

// function checkUsername(minLength) {                     // Declare function
//   if (elUsername.value.length < 5) {           // If username too short
//     // Set the error message
//     elMsg.textContent = 'Username must be ' + minLength + ' characters or more.';
//   } else {                                           // Otherwise
//     elMsg.innerHTML = '';                            // Clear msg
//   }
// }

// elUsername.addEventListener('blur', function() {        // When it loses focus
//   checkUsername(5);                                     // Pass argument here
// },false);

// 2nd time
// var elUsername = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// function checkUsername(minLength) {
//   if (elUsername.value.length < 5) {
//     elMsg.textContent = 'Username must be ' + minLength + ' characters or more.';
//   } else {
//     elMsg.innerHTML = '';
//   }
// }

// elUsername.addEventListener('blur', function(){
//   checkUsername(5);
// }, false);


// 3rd time
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
  if (elUsername.value.length < 5) {
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more.';
  } else {
    elMsg.innerHTML = '';
  }
}

elUsername.addEventListener('blur', function() {
  checkUsername(5);
}, false);