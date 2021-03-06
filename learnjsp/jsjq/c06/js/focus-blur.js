// function checkUsername() {                        // Declare function
//   var username = el.value;                        // Store username in variable
//   if (username.length < 5) {                      // If username < 5 characters
//     elMsg.className = 'warning';                  // Change class on message
//     elMsg.textContent = 'Not long enough, yet...';// Update message
//   } else {                                        // Otherwise
//     elMsg.textContent = '';                       // Clear the message
//   }
// }

// function tipUsername() {                          // Declare function
//   elMsg.className = 'tip';                        // Change class for message
//   elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
// }

// var el = document.getElementById('username');     // Username input
// var elMsg = document.getElementById('feedback');  // Element to hold message

// // When the username input gains / loses focus call functions above:
// el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
// el.addEventListener('blur', checkUsername, false);// blur call checkUsername()

// /* LONGER VERSION WITH IE8 (and lower) compatibility

// if (el.addEventListener) {
//   el.addEventListener('focus', tipUsername, false);
//   el.addEventListener('blur', checkUsername, false);
// } else {
//   el.attachEvent('onfocus', tipUsername);
//   el.attachEvent('onblur', checkUsername);
// }

// */

// 2nd time
// function checkUsername() {
//   var userName = el.value;
//   if (userName.length < 5) {
//     elMsg.className = 'warning';
//     elMsg.textContent = 'Not long enough, yet...';
//   } else {
//     elMsg.textContent = '';
//   }
// }

// function tipUsername() {
//   elMsg.className = 'tip';
//   elMsg.innerHTML = 'Username must be at least 5 characters';
// }

// var el = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// // When the username input gains / loses focus call functions above:
// el.addEventListener('focus', tipUsername, false);
// el.addEventListener('blur', checkUsername, false);

// /* LONGER VERSION WITH IE8 (and lower) compatibility

// if (el.addEventListener) {
//   el.addEventListener('focus', tipUsername, false);
//   el.addEventListener('blur', checkUsername, false);
// } else {
//   el.attachEvent('onfocus', tipUsername);
//   e.attachEvent('onblur', checkUsername);
// }
// */


// // 3rd time
// function checkUsername() {
//   var userName = el.value;
//   if (userName.length < 5) {
//     elMsg.className = 'warning';
//     elMsg.textContent = 'Not long enough, yet...';
//   } else {
//     elMsg.textContent = '';
//   }
// }

// function tipUsername() {
//   elMsg.className = 'tip';
//   elMsg.innerHTML = 'Username must be at least 5 characters';
// }

// var el = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// el.addEventListener('focus', tipUsername, false);
// el.addEventListener('blur', checkUsername, false);



// Another attempt  
function checkUsername() {
  var username = document.getElementById('username');
  if (username.value.length < 5) {
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough, yet...';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.className = 'tip';
  elMsg.textContent = 'Username must be at least 5 characters.';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);




















