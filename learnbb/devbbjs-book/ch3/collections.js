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
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var myTodo = new Todo();
myTodo.set({title: 'Buy some cookies', completed: true});

myTodo.on({
  'change:title':titleChanged,
  'change:completed':stateChanged
});

function titleChanged(){
  console.log("The title was changed.");
}

function stateChanged(){
  console.log("The state was changed.");
}

myTodo.set({title: 'Get the groceries'});

















