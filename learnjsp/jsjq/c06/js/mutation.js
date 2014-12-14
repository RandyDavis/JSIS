// var elList, addLink, newEl, newText, counter, listItems; // Declare variables

// elList  = document.getElementById('list');               // Get list
// addLink = document.querySelector('a');                   // Get add item button
// counter = document.getElementById('counter');            // Get item counter

// function addItem(e) {                                    // Declare function
//   e.preventDefault();                                    // Prevent link action
//   newEl = document.createElement('li');                  // New <li> element
//   newText = document.createTextNode('New list item');    // New text node
//   newEl.appendChild(newText);                            // Add text to <li>
//   elList.appendChild(newEl);                             // Add <li> to list
// }

// function updateCount() {                                 // Declare function
//   listitems = list.getElementsByTagName('li').length;    // Get total of <li>s
//   counter.innerHTML = listitems;                         // Update counter
// }

// addLink.addEventListener('click', addItem, false);       // Click on button
// elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated



// Another attempt
var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
  e.preventDefault();
  newEl = document.createElement('li');
  newText = document.createTextNode('New List Item');
  newEl.appendChild(newText);
  elList.appendChild(newEl);
}

function updateCount() {
  listItems = list.getElementsByTagName('li').length;
  counter.textContent = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);