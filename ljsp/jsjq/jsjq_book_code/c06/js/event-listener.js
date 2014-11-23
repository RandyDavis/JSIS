// function checkUsername() {                            // Declare function
//   var elMsg = document.getElementById('feedback');       // Get feedback element
//   if (this.value.length < 5) {                         // If username too short
//     elMsg.textContent = 'Username must be at least 5 characters long.';   // Set msg
//   } else {                                             // Otherwise
//     elMsg.textContent = '';                            // Clear msg
//   }
// }

// var elUsername = document.getElementById('username');  // Get username input
// // When it loses focus call checkUsername()
// elUsername.addEventListener('blur', checkUsername, false);


// 2nd time
// function checkUsername() {
//   var elMsg = document.getElementById('feedback');
//   if (this.value.length < 5) {
//     elMsg.textContent = 'Username must be at least 5 characters long.';
//   } else {
//     elMsg.textContent = '';
//   }
// }

// var elUsername = document.getElementById('username');
// elUsername.addEventListener('blur', checkUsername, false);


// 3rd time
function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be at least 5 characters long.';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);