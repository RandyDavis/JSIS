var table = 3;             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message


if (operator === 'addition') {  // Do addition
  while (i < 10) {
    msg += i + ' + 3 = ' + (i + 3) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 10) {
    msg += i + ' x 3 = ' + (i * 3) + '<br />';
    i++;
  }
}
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

// 2nd time practicing script
// var table = 7;
// var operator = 'multiplication';
// var i = 1;
// var msg = '';

// if (operator == 'addition') {
//   while (i < 10) {
//     msg += i + ' + 7 = ' + (i + 7) + '<br />';
//     i++;
//   }
// } else {
//   while (i < 10) {      // do multiplication
//     msg += i + ' x 7 = ' + (i * 7) + '<br />';
//     i++;
//   }
// }

// document.getElementById('blackboard').innerHTML = msg;

