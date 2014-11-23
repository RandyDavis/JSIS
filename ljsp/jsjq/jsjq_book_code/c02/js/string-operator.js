// Store the greeting in a variable
var greeting = "Howdy ";

// Store the users name in a variable
var name = "Randy";

/* Create the welcome message by concatenating the strings in the two variables */
var welcomeMessage = greeting + name + '!';

// Get the element that has an id of greeting
var elGreeting = document.getElementById('greeting');

// Replace the content of this element with the personal message
elGreeting.textContent = welcomeMessage;

// Note: textContent does not work in IE8 or earlier - see explanation on website