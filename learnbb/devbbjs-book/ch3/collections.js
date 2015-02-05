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
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});
var myTodo = new Todo({ title: "REad the whole book", id: 2});

// pass array of models on collection instantiation
var todos = new TodosCollection([myTodo]);

var todo2 = todos.get(2);

// Models, as objects, are passed by reference
console.log(todo2 === myTodo); // true












