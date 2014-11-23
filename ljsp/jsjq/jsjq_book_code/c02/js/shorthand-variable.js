// Method 1
// var price = 5;
// var quantity = 14;
// var total = price * quantity;

// Method 2
// var price, quantity, total;
// price = 5;
// quantity = 14;
// total = price * quantity;

// Method 3
var price = 5; quantity = 14;
var total = price * quantity;

// Write total into the element with the id of cost
var el = document.getElementById('cost');
el.textContent = '$' + total;