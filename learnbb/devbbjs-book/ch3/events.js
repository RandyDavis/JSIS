// ************* EVENTS *****************
// *** on(), off(), trigger() ***
// Backbone.Events can give any object the ability to bind and trigger custom Events
// var ourObject = {};

// // Mixin
// _.extend(ourObject, Backbone.Events);

// // Add a custom Event
// ourObject.on('dance', function(msg) {
//   console.log('We triggered ' + msg);
// });

// // Trigger the custom event
// ourObject.trigger('dance', 'ourEvent');





// *The official Backbone.js docs recommend namespacing event names
// using colons if you have quite a few on  your page, for example:
// var ourObject = {};

// // Mixin
// _.extend(ourObject, Backbone.Events);

// function dancing(msg) {
//   console.log("We started " + msg);
// }

// // Add namespaced custom events
// ourObject.on("dance:tap", dancing);
// ourObject.on("dance:break", dancing);

// // Trigger the custom events
// ourObject.on("dance:tap", "tap dancing. Yeah!");
// ourObject.on("dance:break", "break dancing. Yeah!");

// // This one triggers nothing as no listener listens for it
// ourObject.trigger("dance", "break dancing. Yeah!");






// *** All Event: gives notifications on every event that occurse on the object ***
// var ourObject = {};

// // Mixin
// _.extend(ourObject, Backbone.Events);

// function dancing(msg) {
//   console.log("We started " + msg);
// }

// ourObject.on("all", function(eventName) {
//   console.log("The name of the event passed was " + eventName);
// });

// // This time each event will be caught with a catch 'all' event listener
// ourObject.trigger("dance:tap", "tap dancing! Yeah!");
// ourObject.trigger("dance:break", "break dancing! Yeah!");
// ourObject.trigger("dance", "break dancing! Yeah!");




// *** Off Event: removes callback functions that were preoviously bound to an object. ***
var ourObject = {};

// Mixin
_.extend(ourObject, Backbone.Events);

function dancing(msg) {
  console.log("We " + msg);
}

// Add namespaced custom events
ourObject.on("dance:tap", dancing);
ourObject.on("dance:break", dancing);

// Trigger the custom events.  Each will be caught and acted upon.
ourObject.trigger("dance:tap", "started tap dancing! Yeah!");
ourObject.trigger("dance:break", "started break dancing! Yeah!");

// Removes event bound to the object
ourObject.off("dance:tap");

// Trigger custome events again, but one is logged
ourObject.trigger("dance:tap", "stopped tap dancing.");

// won't e logged as it's not listend for
ourObject.trigger("dance:break", "break dancing. Yeah!");































