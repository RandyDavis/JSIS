// Select the starting point and find its children.// var startingItem = document.getElementsByTagName('ul')[0];// var firstItem = startingItem.firstChild;// var lastItem = startingItem.lastChild;// // Change the values of the children's class attributes.// firstItem.className = 'complete';// lastItem.className = 'cool';// 2nd time// var start = document.getElementsByTagName('ul')[0];// var first = start.firstChild;// var last = start.lastChild;// first.className = 'complete';// last.className = 'cool';// 3rd time// var stpt = document.getElementsByTagName('ul')[0];// var first = stpt.firstChild;// var last = stpt.lastChild;// first.className = 'cool';// last.className = 'complete';// Another attemptvar startingItem = document.getElementsByTagName('ul')[0];var firstItem = startingItem.firstChild;var lastItem = startingItem.lastChild;firstItem.className = 'cool';lastItem.className = 'complete';