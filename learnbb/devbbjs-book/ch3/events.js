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




// // *** Off Event: removes callback functions that were preoviously bound to an object. ***
// var ourObject = {};

// // Mixin
// _.extend(ourObject, Backbone.Events);

// function dancing(msg) {
//   console.log("We " + msg);
// }

// // Add namespaced custom events
// ourObject.on("dance:tap", dancing);
// ourObject.on("dance:break", dancing);

// // Trigger the custom events.  Each will be caught and acted upon.
// ourObject.trigger("dance:tap", "started tap dancing! Yeah!");
// ourObject.trigger("dance:break", "started break dancing! Yeah!");

// // Removes event bound to the object
// ourObject.off("dance:tap");

// // Trigger custome events again, but one is logged
// ourObject.trigger("dance:tap", "stopped tap dancing.");

// // won't e logged as it's not listend for
// ourObject.trigger("dance:break", "break dancing. Yeah!");





// *** Remove ALL Callbacks ***
// var ourObject = {};

// // Mixin
// _.extend(ourObject, Backbone.Events);

// function dancing(msg) {
//   console.log("We are dancing " + msg);
// }

// function jumping(msg) {
//   console.log("We are jumping " + msg);
// }

// // Add two listeners to the same event
// ourObject.on("move", dancing);
// ourObject.on("movoe", dancing);

// // Trigger the events.  Bothe listeners are called
// ourObject.trigger("move", "Yeah!");

// // Remove specified listener
// ourObject.off("move", dancing);

// // Trigger the events again.  One listener left
// ourObject.trigger("move", "Yeah, jump, jump!");





// *** Triggering Single and Multiple Events ***
// var ourObject = {};

// // Mixin
// _.extend(ourObject, Backbone.Events);

// function doAction(msg) { console.log("We are " + msg);}

// // Add listeners
// ourObject.on("dance", doAction);
// ourObject.on("jump", doAction);
// ourObject.on("skip", doAction);

// // Single Event
// ourObject.trigger("dance", "just dancing");

// // Multiple Events
// ourObject.trigger("dance jump skip", 'vary tired from so much action!');



// *** Trigger Passing Multiple Args to Callback Function ***
var ourObject = {};

// Mixin
_.extend(ourObject, Backbone.Events);

function doAction(action, duration) {
  console.log("We are " + action + ' for ' + duration);
}

// Add Listeners
ourObject.on("dance", doAction);
ourObject.on("jump", doAction);
ourObject.on("skip", doAction);

// Passing multiple arguments to single event
ourObject.trigger("dance", 'dancing', "5 minutes");

// Passing multiple arguments to multiple evnts
ourObject.trigger("dance jump skip", 'on fire', "15 minutes");






















