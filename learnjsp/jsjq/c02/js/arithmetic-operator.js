// Create a variable for the subtotal and make a calculation
var subtotal = (5 + 30) * 2; // Subtotal is 70

// Create a variable for the shipping and make a calculation
var shipping = 0.5 * (13 + 1); // Shipping is 7

// Create the total by combining the subtotal and shipping values
var total = subtotal + shipping; // Total is 77

// Write the results to the screen
var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = subtotal;
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;
var elTotal = document.getElementById('total');
elTotal.textContent = total;



// Note: textContent does not work in IE8 or earlier - see explanation on website