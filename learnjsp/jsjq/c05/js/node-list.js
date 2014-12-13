// var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array
// if (hotItems.length > 0) {                          // If it contains items

//   for (var i = 0; i < hotItems.length; i++) {     // Loop through each item
//     hotItems[i].className = 'cool';     // Change value of class attribute
//   }
// }

// 2nd time
// var hotItems = document.querySelectorAll('li.hot');
// if (hotItems.length > 0) {
//   for (var i = 0; i < hotItems.length; i++) {
//     hotItems[i].className = 'cool';
//   }
// }


// 3rd time
// var hotItems = document.querySelectorAll('li.hot');
// if (hotItems.length > 0) {
//   for (var i = 0; i < hotItems.length; i++) {
//     hotItems[i].className = 'cool';
//   }
// }


// Another attempt
var els = document.querySelectorAll('li.hot');

for (var i = 0; i < els.length; i++) {
  els[i].className = 'cool';
}