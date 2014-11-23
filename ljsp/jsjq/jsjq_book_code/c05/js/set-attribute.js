var firstItem = document.getElementById('one'); // Get the first item
firstItem.className = 'complete';               // Change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3);// Get fourth item
// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute('class', 'cool');       // Add an attribute to it

// 2nd time
// var firstItem = document.getElementById('one');
// firstItem.className = 'cool';

// var thirdItem = document.getElementsByTagName('li')[2];
// thirdItem.setAttribute('class', 'complete');

// var firstItem = document.getElementById('one');
// firstItem.className = 'complete';

// var fourthItem = document.getElementsByTagName('li')[3];
// fourthItem.setAttribute('class', 'cool');