// *** MODELS ***

// var Todo = Backbone.Model.extend({});


// // We can then create our own concrete instance of a (Todo) model 
// // with no values at all :
// var todo1 = new Todo();

// // Following logs: {}
// console.log(JSON.stringify(todo1));

// // or with some arbitrary data:
// var todo2 = new Todo({
//   title: "Check the attributes of both model instances in the console.",
//   completed: true
// });

// // Following logs: {"title": "Check the attribures of both model
// // for instances in the console.", "completed": true}
// console.log(JSON.stringify(todo2));





// *** INITIALIZATION ***
// var Todo = Backbone.Model.extend({
//   initialize: function() {
//     console.log('This model has been initialized.');
//   }
// });

// var myTodo = new Todo();
// Logs: 'This model has been initialized.'




// *** DEFAULT VALUES ***
// var Todo  = Backbone.Model.extend({
//   // Default todo attribute values
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// // Now we can create our concrete instance of the model
// // with default values as follows:
// var todo1 = new Todo();

// // Following logs: { "title": "", "completed": falsse}
// console.log(JSON.stringify(todo1));

// // Or we could instantiate it with some of the attribures (e.g., with
// // custom title):
// var todo2 = new Todo({
//   title: 'Check attributes of the logged models in the console.'
// });

// // Following logs: {"title":"Check attribures of the logged models in the console."}
// console.log(JSON.stringify(todo2));


// // Or override all of the default attributes:
// var todo3 = new Todo({
//   title: 'This todo is done, so take no action on this one.',
//   completed: true
// });

// // Following logs: {"title": "This todo is done, so take no action on this one.", "completed": true}
// console.log(JSON.stringify(todo3));





// *** GETTERS AND SETTERS ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var todo1 = new Todo();
// console.log(todo1.get("title")); // empty string
// console.log(todo1.get("completed")); // false

// var todo2 = new Todo({
//   title: "Retrieved with model's get() method.",
//   completed: true
// });
// console.log(todo2.get("title")); // "Retrieved with model's get() method."
// console.log(todo2.get("completed")); // "true"





// *** GETTERS AND SETTERS W/toJSON ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var todo1 = new Todo();
// var todo1Attributes = todo1.toJSON();
// // Following logs: {"title": "", "completed": false}
// console.log(todo1Attributes);

// var todo2 = new Todo({
//   title: "Try these examples and check results in console.",
//   completed: true
// });

// // logs: {"title": "Try these examples and check results in console.",
// // "completed": true}
// console.log(todo2.toJSON());





// *** MODEL.SET() ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// // Setting the value of attributes via instantiation
// var myTodo = new Todo({
//   title: 'Set through instantiation.'
// });
// console.log('Todo title: ' + myTodo.get('title'));
// // Todo title: Set through instantiation.
// console.log('Completed: ' + myTodo.get('completed'));
// // Completed: false

// // Set single attribute value at a time through Model.set();
// myTodo.set("title", "Title attribute set through Model.set().");
// console.log('Todo title: ' + myTodo.get('title'));
// // Todo title: 'title attribute set through Model.set().'
// console.log('Completed: ' + myTodo.get('completed'));
// // Completed: false

// // Set map of attribures through Model.set();
// myTodo.set({
//   title: "Both attributes set through Model.set().",
//   complete: true
// });
// console.log('Todo title: ' + myTodo.get('title'));
// // Todo title: Both attribures set through Model.set().
// console.log('Completed: ' + myTodo.get('complete'));
// // Completed: true




// *** Direct Access ***
// var Person = new Backbone.Model();
// Person.set({name: 'Randy'}, {silent: true});

// console.log(!Person.hasChanged(0));
// // true
// console.log(!Person.hasChanged(''));
// // true






// *** LISTENING FOR CHANGES TO YOUR MODEL *** 
// *** All Attributes ***
// var Todo = Backbone.Model.extend({
//   // Default todo attribute values
//   defaults: {
//     title: '',
//     completed: false
//   },
//   initialize: function() {
//     console.log('This model has been initialized.');
//     this.on('change', function() {
//       console.log('- Values for this model have changed.');
//     });
//   }
// });

// var myTodo = new Todo();

// myTodo.set('title', 'The Listener is triggered whenever an attribute value changes.');
// console.log('Title has changed: ' + myTodo.get('title'));

// myTodo.set('completed', true);
// console.log('Completed has changed: ' + myTodo.get('completed'));

// myTodo.set({
//   title: 'Changing more than one attribute at the same time only triggers the listener once.',
//   completed: true
// });

// Above logs:
// This model has been initialized.
// - Values for this model have changed.
// Title has changed: The listener is triggered when an attribute value changes.
// - Values for this model have changed.
// Completed has changed: true
// - Values for this model have changed.



// *** Individual Attributes ***
// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   },

//   initialize: function() {
//     console.log('This model has been initialized.');
//     this.on('change:title', function() {
//       console.log('Title value for this model has changed.');
//     });
//   },

//   setTitle: function(newTitle) {
//     this.set({ title: newTitle });
//   }
// });

// var myTodo = new Todo();

// // both of the following changes trigger the listener:
// myTodo.set('title', 'Check what\'s logged.');
// myTodo.setTitle("Go fishing on Sunday");

// // But this change type is not observed, so no listener is triggered:
// myTodo.set('completed', true);
// console.log('Todo set as completed: ' + myTodo.get('completed'));

// Above logs:
// This model has been initialized.
// Title value for this model has changed.
// Title value for this model has changed.
// Todo set as completed: true




// *** VALIDATION ***
// ** Brief Example
// var Person = new Backbone.Model({name: 'Randy'});

// // Validate the model name
// Person.validate = function(attrs) {
//   if (!attrs.name) {
//     return 'I need your name';
//   }
// };

// // Change the name
// Person.set({name: 'Sammy'});
// console.log(Person.get('name'));
// // 'Sammy'

// // Remove the name attribure, force validation
// Person.unset('name', {validate: true});
// // false



// *** Complete Validation Example
var Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attribs) {
    if(attribs.title === undefined) {
      return "Remember to set a title for your todo.";
    }
  },

  initialize: function() {
    console.log('This model has been initialized.');
    this.on('invalid', function(model, error) {
      console.log(error);
    });
  }
});


var myTodo = new Todo();
myTodo.set('completed', true, {validate: true});
// logs: 'Remember to set a title for your todo.'
console.log('completed: ' + myTodo.get('completed'));  // completed: false











