// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Randy';
var message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
var welcomeMessage = greeting + name + message;


// Create variables to hold details about the sign
var sign = "Randy's House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var elGreeting = document.getElementById('greeting');

// Replace the content of that element with the personalized welcome message
elGreeting.textContent = welcomeMessage;

// Get the element that has an id of userSign then update its contents
var elUserSign = document.getElementById('userSign');
elUserSign.textContent = sign;


// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;


// Get the element that has an id of subTotal then update its contents
var elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = subTotal;


// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;


// Get the element that has an id of grandTotal then update its contents
var elTotal = document.getElementById('grandTotal');
elTotal.textContent = grandTotal;


// Note: textContent does not work in IE8 or earlier - see explanation on website