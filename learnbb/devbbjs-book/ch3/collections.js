// *** COLLECTIONS ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var TodoCollection = Backbone.Collection.extend({
//   model: Todo
// });

// var myTodo = new TodoCollection({ title: 'Read the whole book', id: 2 });

// // pass array of models on collection instantiation
// var todos = new TodoCollection([myTodo]);
// console.log("Collection size: " + todos.length);  // Collection size: 1




// *** Adding and Removing Models ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo
// });

// var a = new Todo({ title: "Go to Jamaica." }),
//     b = new Todo({ title: "Go to China." }),
//     c = new Todo({ title: "Go to Disneyland." });

// var todos = new TodosCollection([a,b]);
// console.log("Collection size: " + todos.length); // Logs: Collection size: 2

// todos.add(c);
// console.log("Collection size: " + todos.length); // Logs: Collection size: 3

// todos.remove([a,b]);
// console.log("Collection size: " + todos.length); // Logs: Collection size: 1

// todos.remove(c);
// console.log("Collection size: " + todos.length); // Logs: Collection size: 0

// todos.add([a,b,c]);
// console.log("Collection size: " + todos.length); // Logs: Collection size: 3

// todos.remove(a);
// console.log("Collection size: " + todos.length); // Logs: Collection size: 2

// todos.remove(a);
// console.log("Collection size: " + todos.length); // Still Logs: Collection size: 2


// // Also note that when you are using add() on a collection, 
// // passing {merge: true} causes duplicate models to have their 
// // attributes merged into the existing models, instead of being ignored.
// var items = new Backbone.Collection;
// items.add([{ id: 1, name: "Dog", age: 3 }, { id: 2, name: "cat", age: 2 }]);
// items.add([{ id: 1, name: "Bear"}], {merge: true });
// items.add([{ id: 2, name: "lion" }]); // merge: false

// console.log(JSON.stringify(items.toJSON()));
// "[{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]"




// *** Retrieving Models ***
// another way to retrieve a model from a collection
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo
// });
// var myTodo = new Todo({ title: "REad the whole book", id: 2});

// // pass array of models on collection instantiation
// var todos = new TodosCollection([myTodo]);

// var todo2 = todos.get(2);

// // Models, as objects, are passed by reference
// console.log(todo2 === myTodo); // true

// var todoCid = todos.get(todo2.cid);

// // As mentioned in previous example, models are passed by reference
// console.log(todoCid == myTodo);





// **** Listening for Events ****
// var TodosCollection = new Backbone.Collection();

// TodosCollection.on("add", function(todo) {
//   console.log("I should " + todo.get("title") + ". Have I done it before? " + (todo.get("completed") ? 'Yeah!': 'No'));
// });

// TodosCollection.add([
//   { title: 'go to Jamaica', completed: false },
//   { title: 'go to China', completed: false },
//   { title: 'go to Disneyland', completed: true }
// ]);
// The above logs:
// I should go to Jamaica. Have I done it before? No.
// I should go to China. Have I done it before? No.
// I should go to Disneyland. Have I done it before? Yeah!


// we're also able to bind to a change event to listen for changes to any of the models
// in the collection
// var TodosCollection = new Backbone.Collection();

// // log a message if a model in the collection changes
// TodosCollection.on("change", function(model) {
//   console.log("Changed my mind! I should " + model.get('title'));
// });

// TodosCollection.add([
//   {title: 'go to Jamaica.', completed: false, id: 3}
// ]);

// var myTodo = TodosCollection.get(3);

// myTodo.set('title', 'go fishing');
// logs: "Changed my mind! I should go fishing"



// jQuery-style event maps
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var myTodo = new Todo();
// myTodo.set({title: 'Buy some cookies', completed: true});

// myTodo.on({
//   'change:title':titleChanged,
//   'change:completed':stateChanged
// });

// function titleChanged(){
//   console.log("The title was changed.");
// }

// function stateChanged(){
//   console.log("The state was changed.");
// }

// myTodo.set({title: 'Get the groceries'});


// // Backbone events once() method
// // Define an object with two counters
// var TodoCounter = { counterA: 0, counterB: 0 };
// // Mix in Backbone Events
// _.extend(TodoCounter, Backbone.Events);

// // Increment counterA, triggering an event
// var incrA = function() {
//   TodoCounter.counterA += 1;
//   TodoCounter.trigger('event');
// };

// // Increment counterB
// var incrB = function() {
//   TodoCounter.counterB += 1;
// };

// // Use once rather than having to explicitly unbind our event listener
// TodoCounter.once('event', incrA);
// TodoCounter.once('event', incrB);

// // Trigger the event once again
// TodoCounter.trigger('event');

// // Check our output
// console.log(TodoCounter.counterA === 1); // true
// console.log(TodoCounter.counterB == 1); // true



// *** Resetting/Refreshing Collections ***
// var TodosCollection = new Backbone.Collection();

// TodosCollection.add([
//   { id: 1, title: 'go to Jamaica', completed: false },
//   { id: 2, title: 'go to China', completed: false },
//   { id: 3, title: 'go to Disneyland', completed: true }
// ]);

// // we can listen for add/change/remove events
// TodosCollection.on('add', function(model) {
//   console.log("Added " + model.get('title'));
// });

// TodosCollection.on("remove", function(model) {
//   console.log("Removed " + model.get('title'));
// });

// TodosCollection.on("change:completed", function(model) {
//   console.log("Completed " + model.get('title'));
// });

// TodosCollection.set([
//   { id: 1, title: 'go to Jamaica', completed: true },
//   { id: 2, title: 'go to China', completed: false },
//   { id: 4, title: 'go to Disneyland', completed: false }
// ]);

// Above logs:
    // Removed go to Disneyland.
    // Completed go to Jamaica.
    // Added go to Disney World.


// Use Collection.reset() to replace the entire content of the collection
// var TodosCollection = new Backbone.Collection();

// // we can listen for reset events
// TodosCollection.on("reset", function(){
//   console.log("Collection reset");
// });

// TodosCollection.add([
//   {title: 'go to Jamaica.', completed: false},
//   {title: 'go to China.', completed: false},
//   {title: 'go to Disneyland.', completed: true}
// ]);

// console.log('Collection size: ' + TodosCollection.length);  // Collection size: 3

// TodosCollection.reset([
//   {title: 'go to Cuba.', completed: false}
// ]);

// console.log('Collection size: ' + TodosCollection.length);  // Collection size: 1

// // Another useful tip is to use .reset() with no arguments to clear the collection completely
// TodosCollection.reset([]);

// console.log('Collection size: ' + TodosCollection.length);  // Collection size: 0


// // * Also not that when listening to a reset event, the list of previous models is available
// // * in options.previouModels, for convenience:
// var Todo = new Backbone.Model();
// var Todos = new Backbone.Collection([Todo])
//   .on('reset', function(Todos, options) {
//     console.log(options.previousModels);
//     console.log([Todo]);
//     console.log(options.previousModels[0] === Todo); // true
//   });
//   Todos.reset([]);


// // * An update() method is available for collections (and is also available as an option to fetch) 
// // * for smart updating of sets of models. This method attempts to perform smart updating of a collection
// // * using a specified list of models. When a model in this list isn’t present in the collection, it is added. 
// // * If it is present, its attributes will be merged. Models that are present in the collection but not in the list are removed.

// var theBeatles = new Collection(['john', 'paul', 'george', 'ringo']);

// theBeatles.update(['john', 'paul', 'george', 'pete']);
// // Fires a `remove` event for 'ringo', and an `add` event for 'pete'.
// // Updates any of john, paul, and george's attributes that may have
// // changed over the years.






// ******** Using Underscore Utility Functions ********

// *** forEach: Iterate over Collections ***
// var Todos = new Backbone.Collection();

// Todos.add([
//   { title: 'go to Belgium', completed: false },
//   { title: 'go to China', completed: false },
//   { title: 'go to Austria', completed: true }
// ]);

// // iterate over models in the collection
// Todos.forEach(function(model) {
//   console.log(model.get('title'));
// });
// //  Above logs:
// // go to Belgium
// // go to China
// // go to Austria


// // *** sortBy(): Sort a collection on a specific attribute ***
// var sortedAlphabet = Todos.sortBy(function(todo) {
//   return todo.get("title").toLowerCase();
// });

// console.log("- Now Sorted: ");

// sortedAlphabet.forEach(function(model) {
//   console.log(model.get("title"));
// });

// // Above logs:
// // "- Now Sorted: " collections.js:317:0
// // "go to Austria" collections.js:320:2
// // "go to Belgium" collections.js:320:2
// // "go to China"



// // *** map(): Create a new collection by mapping each value in a list through a transformation function ***
// var count = 1;
// console.log(Todos.map(function(model) {
//   return count++ + ". " + model.get('title');
// }));

// // Above logs:
// // Array [ "1. go to Belgium", "2. go to China", "3. go to Austria" ]




// // *** min()/max(): Retrieve item with the min or max value of an attribute
// Todos.max(function(model) {
//   return model.id;
// }).id;

// Todos.min(function(model) {
//   return model.id;
// }).id;



// // *** pluck(): Extract a specific attribute
// var captions = Todos.pluck('caption');
// // returns a list of captions



// *** filter(): Filter a collection
// Filter by an array of model IDs
// var Todo = Backbone.Model.extend();
// var Todos = Backbone.Collection.extend({
//   model: Todo,
//   filterById: function(ids) {
//     return this.models.filter(
//       function(c) {
//         return _.contains(id, c.id);
//       });
//   }
// });



// // *** indexOf(): Return the item at a particular index within a collection
// var People = new Backbone.Collection();
// People.comparator = function(a, b) {
//   return a.get('name') < b.get('name') ? -1 : 1;
// };

// var tom = new Backbone.Model({ name: 'Tom' });
// var rob = new Backbone.Model({ name: 'Rob' });
// var tim = new Backbone.Model({ name: 'Tim' });

// People.add(tom);
// People.add(rob);
// People.add(tim);

// console.log(People.indexOf(rob) === 0);  // true
// console.log(People.indexOf(tim) === 1);  // true
// console.log(People.indexOf(tom) === 2);  // true




// // *** any(): Confirm if any of the values in a collection pass an iterator truth test
// Todos.any(function(model) {
//   return model.id === 100;
// });

// // or
// Todos.some(function(model) {
//   return model.id === 100;
// });




// // *** size(): Return the size of a collection
// Todos.size();

// // equivalent to 
// Todos.length;





// *** isEmpty(): Determine whether a collection is empty
// var isEmpty = Todos.isEmpty();




// *** groupBy(): Group a collection into groups like items
// var Todos = new Backbone.Collection();

// Todos.add([
//   { title: 'go to Belgium', completed: false },
//   { title: 'go to China', completed: false },
//   { title: 'go to Austria', completed: true }
// ]);

// // create groups of completed and incomplete models
// var byCompleted = Todos.groupBy('completed');
// var completed = new Backbone.Collection(byCompleted[true]);
// console.log(completed.pluck('title'));

// // Above logs
// // Array [ "go to Austria" ]




// // *** pick(): Extract a set of attributes from a model
// var Todo = Backbone.Model.extend({
//   default: {
//     title: '',
//     completed: false
//   }
// });

// var todo =  new Todo({ title: 'go to Austria.' });
// console.log(todo.pick('title'));
// // Above logs
// // { title: "go to Austria." }




// // *** omit(): Extract all attributes from a model except those listed
// var todo = new Todo({ title: 'go to Austria.' });
// console.log(todo.omit('title'));
// // Above logs
// // {  }



// // *** keys() and values(): Get lists of attribute names and values
// var todo = new Todo({ title: 'go to Austria.' });
// console.log(todo.keys());
// // Above logs
// // ["title", "completed"]

// console.log(todo.values());
// Aboe logs
// ["go to Austria", false]




// *** pairs(): Get list of attributes as [key, value] pairs
// var todo = new Todo({title: 'go to Austria.' });
// var pairs = todo.pairs();

// console.log(pairs[0]);
// // Above logs
// // ["title", "go to Austria"]

// console.log(pairs[1]);
// // Above logs
// // ["completed", false]



// // *** invert(): Create object in which the values are keys and the attributes are values
// var todo = new Todo({ title: "go to Austria." });
// console.log(todo.invert());
// // Above logs
// // { go to Austria.: "title", false: "completed" }





// ********** CHAINABLE API *****************
// *** chain(): Allows you to to chain calls to methods on collections
var collection = new Backbone.Collection([
  { name: 'Tim', age: 5 },
  { name: 'Ida', age: 26 },
  { name: 'Rob', age: 55 }
]);

var filteredNames = collection.chain()
// start chain, returns wrapper around collection's models
  .filter(function(item) {
    return item.get('age') > 10;
  })
  // returns wrapped array excluding Tim
  .map(function(item) {
    return item.get('name');
  })
  // returns wrapped array containing remaining names
  .value(); // terminates the chain and returns the resulting array

console.log(filteredNames); // logs: ['Ida', 'Rob']


// Additional Chaining scenario
var collection2 = new Backbone.Collection();

collection2
  .add({ name: 'John', age: 23 })
  .add({ name: 'Harry', age: 33 })
  .add({ name: 'Steve', age: 41 });

var names = collection2.pluck('name');
console.log(names);  // logs: ['John', 'Harry', 'Steve']











