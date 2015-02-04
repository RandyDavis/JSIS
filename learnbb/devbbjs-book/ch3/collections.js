var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodoCollection = Backbone.Collection.extend({
  model: Todo
});

var myTodo = new TodoCollection({ title: 'Read the whole book', id: 2 });

// pass array of models on collection instantiation
var todos = new TodoCollection([myTodo]);
console.log("Collection size: " + todos.length);  // Collection size: 1