var passMark = 70;      // Pass mark
var score = 75;    // Current score
var msg = '';            // Message

// Select message to write based on score
if (score >= passMark) {
  msg += 'Congratulations, you passed!';
} else {
  msg += 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;