// // Create variables for the welcome message
// var greeting = 'Howdy ';
// var name = 'Randy';
// var message = ', please check your order:';
// // Concatenate the three variables above to create the welcome message
// var welcomeMessage = greeting + name + message;


// // Create variables to hold details about the sign
// var sign = "Randy's House";
// var tiles = sign.length;
// var subTotal = tiles * 5;
// var shipping = 7;
// var grandTotal = subTotal + shipping;

// // Get the element that has an id of greeting
// var elGreeting = document.getElementById('greeting');

// // Replace the content of that element with the personalized welcome message
// elGreeting.textContent = welcomeMessage;

// // Get the element that has an id of userSign then update its contents
// var elUserSign = document.getElementById('userSign');
// elUserSign.textContent = sign;


// // Get the element that has an id of tiles then update its contents
// var elTiles = document.getElementById('tiles');
// elTiles.textContent = tiles;


// // Get the element that has an id of subTotal then update its contents
// var elSubtotal = document.getElementById('subTotal');
// elSubtotal.textContent = subTotal;


// // Get the element that has an id of shipping then update its contents
// var elShipping = document.getElementById('shipping');
// elShipping.textContent = shipping;


// // Get the element that has an id of grandTotal then update its contents
// var elTotal = document.getElementById('grandTotal');
// elTotal.textContent = grandTotal;


// // Note: textContent does not work in IE8 or earlier - see explanation on website


// jsis attempt
var greeting, sign, totalTiles, subtotal, shipping, grandTotal;
greeting = "Welcome to our shop!";
sign = prompt("Tell us what you would like your sign to say:","");
totalTiles = sign.length;
subtotal = totalTiles * 5;
shipping = 7;
grandTotal = subtotal + shipping;

var elGreeting = document.getElementById('greeting');
elGreeting.textContent = greeting;

var elUserSign = document.getElementById('userSign');
elUserSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = totalTiles;

var elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = subtotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

