var firstItem = document.getElementById('one'); // Get the first itemif (firstItem.hasAttribute('class')) {          // If it has a class attribute  firstItem.removeAttribute('class');           // Remove its class attribute}// 2nd time// var firstItem = document.getElementsByTagName('li')[0];// if (firstItem.hasAttribute('class')) {//   firstItem.removeAttribute('class');// }// 3rd time// var firstItem = document.getElementById('one');// if (firstItem.hasAttribute('class')) {//   firstItem.removeAttribute('class');// }