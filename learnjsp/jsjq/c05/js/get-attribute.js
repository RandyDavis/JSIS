// var firstItem = document.getElementById('one'); // Get first list item 
// if (firstItem.hasAttribute('class')) {          // If it has class attribute
//   var attr = firstItem.getAttribute('class'); // Get the attribute

//   // Add the value of the attribute after the list
//   var el = document.getElementById('scriptResults');
//   el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
// };

// 2nd time
// var firstItem = document.getElementById('one');
// if (firstItem.hasAttribute('class')) {
//   var attr = firstItem.getAttribute('class');
//   var el = document.getElementById('scriptResults');
//   el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
// }

// 3rd time
// var firstItem = document.getElementById('one');
// if (firstItem.hasAttribute('class')) {
//   var attr = firstItem.getAttribute('class');
//   var el = document.getElementById('scriptResults');
//   el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
// }



// Another attempt
var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
  var attr = firstItem.getAttribute('class');

  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}
