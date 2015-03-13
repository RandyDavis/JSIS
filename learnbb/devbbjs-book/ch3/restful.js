// ****** RESTFUL PERSISTENCT ***********
// *** Fetching Models from the Server ***
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: todo,
  url: '/todos'
});

var todos = new TodosCollection();
todos.fetch(); // sends HTTP GET to /todos




// *** Saving Models to the Server ***
