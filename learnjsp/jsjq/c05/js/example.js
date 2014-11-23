// ADDING ITEMS TO START AND END OF LIST
// var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

// // ADD NEW ITEM TO END OF LIST
// var newItemLast = document.createElement('li');                    // Create element
// var newTextLast = document.createTextNode('cream');                // Create text node
// newItemLast.appendChild(newTextLast);                              // Add text node to element
// list.appendChild(newItemLast);                                     // Add element end of list

// // ADD NEW ITEM START OF LIST
// var newItemStart = document.createElement('li');                   // Create element
// var newTextStart = document.createTextNode('kale');                // Create text node
// newItemStart.appendChild(newTextStart);                            // Add text node to element
// list.insertBefore(newItemStart, list.firstChild);                  // Add element to list



// var listItems = document.querySelectorAll('li');                  // All <li> elements

// // ADD A CLASS OF COOL TO ALL LIST ITEMS
// var i;                                    // Counter variable
// for (i = 0; i < listItems.length; i++) {                           // Loop through elements
//   listItems[i].className = 'cool';                                   // Change class to cool
// }

// // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// var heading = document.querySelector('h2');                        // h2 element
// var headingText = heading.firstChild.nodeValue;                    // h2 text
// var totalItems = listItems.length;                                 // No. of <li> elements
// var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
// heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup


// 2nd time
// // Add items to start and end of list
// var list = document.getElementsByTagName('ul')[0];

// // Add New item to end of list
// var newItemEnd = document.createElement('li');
// var newEndText = document.createTextNode('broccoli');
// newItemEnd.appendChild(newEndText);
// list.appendChild(newItemEnd);

// // Add New item to start of list
// var newItemStart = document.createElement('li');
// var newStartText = document.createTextNode('walnuts');
// newItemStart.appendChild(newStartText);
// list.insertBefore(newItemStart, list.firstChild);

// // Give all items new class
// var listItems = document.querySelectorAll('li');
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].className = 'cool';
// }

// // Add number of list items to heading
// var heading = document.querySelector('h2');
// var headingText = heading.firstChild.nodeValue;
// var totalItems = listItems.length;
// var newHeading = headingText + '<span>' + totalItems + '</span>';
// heading.innerHTML = newHeading;


// 3rd time
// Add items to start and end of list
var list = document.getElementsByTagName('ul')[0];

// Add new item to end of list
var newItemEnd = document.createElement('li');
var newEndText = document.createTextNode('brussel sprouts');
newItemEnd.appendChild(newEndText);
list.appendChild(newItemEnd);

// Add new item to start of list
var newItemStart = document.createElement('li');
var newStartText = document.createTextNode('beets');
newItemStart.appendChild(newStartText);
list.insertBefore(newItemStart, list.firstChild);

// Give all items new class
var listItems = document.querySelectorAll('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// Add number of list items to heading
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
