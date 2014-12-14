// function getTarget(e) {                          // Declare function
//   if (!e) {                                      // If there is no event object
//     e = window.event;                            // Use old IE event object
//   }
//   return e.target || e.srcElement;               // Get the target of event
// }

// function itemDone(e) {                           // Declare function
//   // Remove item from the list
//   var target, elParent, elGrandparent;           // Declare variables
//   target = getTarget(e);                         // Get the item clicked link
//   elParent = target.parentNode;                  // Get its list item
//   elGrandparent = target.parentNode.parentNode;  // Get its list
//   elGrandparent.removeChild(elParent);           // Remove list item from list

//   // Prevent the link from taking you elsewhere
//   if (e.preventDefault) {                        // If preventDefault() works
//     e.preventDefault();                          // Use preventDefault() 
//   } else {                                       // Otherwise
//     e.returnValue = false;                       // Use old IE version
//   }
// }

// // Set up event listeners to call itemDone() on click
// var el = document.getElementById('shoppingList');// Get shopping list
// if (el.addEventListener) {                       // If event listeners work
//   el.addEventListener('click', function(e) {     // Add listener on click
//     itemDone(e);                                 // It calls itemDone()
//   }, false);                                     // Use bubbling phase for flow
// } else {                                         // Otherwise
//   el.attachEvent('onclick', function(e){         // Use old IE model: onclick
//     itemDone(e);                                 // Call itemDone()
//   });
// }

// 2nd time
// function getTarget(e) {
//   if (!e) {
//     e = window.event;
//   }
//   return e.target || e.srcElement;
// }

// function itemDone(e) {
//   // Remove item from the list
//   var target, elParent, elGrandparent;                // Declare variables
//   target = getTarget(e);                              // Get the item clicked link
//   elParent = target.parentNode;                       // Get its list item
//   elGrandparent = target.parentNode.parentNode;       // Get its list
//   elGrandparent.removeChild(elParent);                // Remove list item from list

//   // Prevent the link from taking you elsewhere
//   if (e.preventDefault) {                             // If preventDefault() works
//     e.preventDefault();                               // Use preventDefault()
//   } else {                                            // Otherwise
//     e.returnValue = false;                            // Use old IE version
//   }
// }

// // Set up event listeners to call itemDone() on click
// var el = document.getElementById('shoppingList');     // Get shopping list
// if (el.addEventListener) {                            // If event listeners work
//   el.addEventListener('click', function(e) {          // Add listener on click
//     itemDone(e);                                      // It calls itemDone()
//   }, false);                                          // Use bubbling phase for flow
// } else {                                              // Otherwise
//   el.attachEvent('onclick', function(e) {             // Use old IE model: onclick
//     itemDone(e);                                      // Call itemDone()
//   });
// }


// 3rd time

// function getTarget(e) {
//   if (!e) {
//     e = window.event;
//   }
//   return e.target || e.srcElement;
// }

// function itemDone(e) {
//   var target, elParent, elGrandparent;              // Declare variables
//   target = getTarget(e);                            // Get the item clicked link
//   elParent = target.parentNode;                     // Get its list item
//   elGrandparent = target.parentNode.parentNode;     // Get its list
//   elGrandparent.removeChild(elParent);              // Remove list item from list
//   if (e.preventDefault) {    // If preventDefault() works
//     e.preventDefault();   // Use preventDefault()
//    } else {   // Otherwise
//     e.returnValue = false;  // Use old IE version
//   }
// }

// // Set up event listeners to call itemDone() on click
// var el = document.getElementById('shoppingList');      // Get shopping list
// if (el.addEventListener) {      // If event listeners work
//   el.addEventListener('click', function(e) {      // Add listener on click
//     itemDone(e);    // It calls itemDone()
//   }, false);    // Use bubbling phase for flow
// } else {     // Otherwise
//   el.attachEvent('onclick', function(e) {      // Use old IE model: onclick
//     itemDone(e);    // Call itemDone()
//   });
// }


// Another attempt
function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  // Remove item from list
  var target, elParent, elGrandparent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elGrandparent.removeChild(elParent);

  // Prevent the link from taking you elsewhere
  if(e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

// Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');
if (el.addEventListener) {
  el.addEventListener('click', function(e) {
    itemDone(e);
  }, false);
} else {
  el.attachEvent('onclick', function(e) {
    itemDone(e);
  });
}











































