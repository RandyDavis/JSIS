// $('nav a').on('click', function(e) {                 // User clicks nav link
//   e.preventDefault();                                // Stop loading new link
//   var url = this.href;                               // Get value of href

//   $('nav a.current').removeClass('current');         // Clear current indicator
//   $(this).addClass('current');                       // New current indicator

//   $('#container').remove();                          // Remove old content
//   $('#content').load(url + ' #content').hide().fadeIn('slow'); // New content
// });


// Another attempt
$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;

  $('nav a.current').removeClass('current');
  $(this).addClass('current');

  $('#container').remove();
  $('#content').load(url + ' #content').hide().fadeIn('slow');
});