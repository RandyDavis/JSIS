// Store the element to be removed in a variable.
var removeEl = document.getElementsByTagName('li')[3];

// Find the element which contains the element to be removed.
var containerEl = removeEl.parentNode;

// Remove the element.
containerEl.removeChild(removeEl);

// 2nd time
// var elToRem = document.getElementsByTagName('li')[3];
// var parentEl = elToRem.parentNode;
// parentEl.removeChild(elToRem);

// 3rd time
// var remEl = document.getElementById('four');
// var parentalEl = remEl.parentNode;
// parentalEl.removeChild(remEl);