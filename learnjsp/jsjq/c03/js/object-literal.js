// Set up the object
// var hotel = {
//   name: 'Quay',
//   rooms: 40,
//   booked: 25,
//   checkAvailability: function() {
//     return this.rooms - this.booked;
//   }
// };

// // Update the HTML
// var elName = document.getElementById('hotelName'); // Get element
// elName.textContent = hotel.name;                   // Update HTML with property of the object

// var elRooms = document.getElementById('rooms');    // Get element
// elRooms.textContent = hotel.checkAvailability();   // Update HTML with property of the object


// Another attempt
// Set up object 
var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

// Update HTML
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();