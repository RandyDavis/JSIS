// function checkUsername() {                            // Declare function
//   var elMsg = document.getElementById('feedback');    // Get feedback element
//   if (this.value.length < 5) {                      // If username too short
//     elMsg.textContent = 'Username must be 5 characters or more.';  // Set msg
//   } else {                                          // Otherwise
//     elMsg.textContent = '';                         // Clear message
//   }
// }


// var elUsername = document.getElementById('username'); // Get username input
// elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()


// 2nd time
// function checkUsername () {
//   var elMsg = document.getElementById('feedback');
//   if (this.value.length < 5) {
//     elMsg.textContent = 'Username must be at least 5 characters long.';
//   } else {
//     elMsg.textContent = '';
//   }
// }

// var elUsername = document.getElementById('username');
// elUsername.onblur = checkUsername;


// 3rd time
function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must have more than 4 characters';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;