// *** VIEWS ***

// var TodoView = Backbone.View.extend({
//   tagName: 'li',
//   // Cache the template function for a single item.
//   todoTpl: _.template('An example template'),

//   events: {
//     'dblclick label': 'edit',
//     'keypress .edit': 'updateOnEnter',
//     'blur .edit': 'close'
//   },

//   // Rerender the titles of the todo item.
//   render: function() {
//     this.$el.html(this.todoTpl(this.model.toJSON()));
//     this.input = this.$('.edit');
//     return this;
//   },

//   edit: function() {
//     // executed when todo label is double-clicked
//   },

//   close: function() {
//     // executed when todo loses focus
//   },

//   updateOnEnter: function(e) {
//     // executed on each keypress when in todo edit mode,
//     // but we'll wait for enter to get in action
//   }
// });

// var todoView = new TodoView();

// // log reference to a DOM element that corresponds to the view instance
// console.log(todoView.el); // logs <li></li>




// *** What is El? ***
// var TodosView = Backbone.View.extend({
//   tagName: 'ul', // required, but defaults to 'div' if not set
//   className: 'container', // optional, you can assign multiple classes to
//                           // this property like so: 'container homepage'
//   id: 'todos' // optional 
// });

// var todosView = new TodosView();
// console.log(todosView.el);





// *** setElement ***
// use setElement to apply an existing Backbone view to a different DOM element

// We create two DOM elements representing buttons
// which could easily be containers or something else
// var button1 = $('<button></button>');
// var button2 = $('<button></button>');

// // Define a new view
// var View = Backbone.View.extend({
//   events: {
//     click: function(e) {
//       console.log(view.el === e.target);
//     }
//   }
// });

// // Create a new instance of the view, applying it
// // to button1
// var view = new View({ el: button1 });

// // Apply the view to button2 using setElement
// view.setElement(button2);

// button1.trigger('click');
// button2.trigger('click'); // returns true





// *** Understanding render() ***
// var ListView = Backbone.View.extend({
//   render: function() {

//     // Assume our model exposes the items we will display in our list
//     var items = this.model.get('items');

//     // Loop through each of our items using the Underscore _.each iterator
//     _.each(items, function() {

//       // Create a new instance of the ItemView, passing it a specific model item
//       var itemView = new ItemView({ model: item });
//       // The itemView's DOM element is appended after it has been rendered.
//       // Here, the 'return this' is helpful as the itemView renders its model.
//       // Later, we ask for its output ("el")
//       this.$el.append( itemView.render().el );
//     }, this);
//   }
// });


// var ItemView = Backbone.View.extend({
//   events: {},
//   render: function() {
//     this.$el.html(this.model.toJSON());
//     return this;
//   }
// });





// *** The events hash ***













































