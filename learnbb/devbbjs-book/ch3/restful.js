// ****** RESTFUL PERSISTENCT ***********
// *** Fetching Models from the Server ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var TodosCollection = Backbone.Collection.extend({
//   model: todo,
//   url: '/todos'
// });

// var todos = new TodosCollection();
// todos.fetch(); // sends HTTP GET to /todos




// *** Saving Models to the Server ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo,
//   url: '/todos'
// });

// var todos = new TodosCollection();
// todos.fetch();

// var todo2 = todos.get(2);
// todo2.set('title', 'go fishing');
// todo2.save(); // sends HTTP PUT to /todos/2

// todos.create({ title: 'Try out code samples' });
// // sends HTTP POST to /todos and adds to collection




// *** Deleting Models from the Server ***
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo,
  url: '/todos'
});

var todos = new TodosCollection();
todos.fetch();

var todo2 = todos.get(2);
todo2.destroy(); // sends HTTP DELETE to /todos/2 and removes from collection

// Calling destroy() on a model will return false if the model isNew:
var Todo = new Backbone.Model();
console.log(Todo.destroy()); // false


























