// $('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

// function loadRates() {
//   $.getJSON('data/rates.json')
//   .done( function(data){                                 // SERVER RETURNS DATA
//     var d = new Date();                                  // Create date object
//     var hrs = d.getHours();                              // Get hours
//     var mins = d.getMinutes();                           // Get mins
//     var msg = '<h2>Exchange Rates</h2>';                 // Start message
//     $.each(data, function(key, val) {                    // Add each rate
//       msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
//     });
//     msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
//     $('#rates').html(msg);                               // Add rates to page
//   }).fail( function() {                                  // THERE IS AN ERROR
//     $('aside').append('Sorry, we cannot load rates.');   // Show error message 
//   }).always( function() {                                // ALWAYS RUNS
//      var reload = '<a id="refresh" href="#">';           // Add refresh link
//      reload += '<img src="img/refresh.png" alt="refresh" /></a>';
//      $('#reload').html(reload);                          // Add refresh link
//      $('#refresh').on('click', function(e) {             // Add click handler
//        e.preventDefault();                               // Stop link
//        loadRates();                                      // Call loadRates()
//      });
//   }); 
// }

// loadRates();                                             // Call loadRates()

$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
    .done(function(data) {
      var d = new Date();
      var hrs = d.getHours();
      var mins = d.getMinutes();
      var msg = '<h2>Exchange Rates</h2>';
      $.each(data, function(key, val) {
        msg += '<div class ="' + key + '">' + key + ': ' + val + '</div>';
      });
      msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';
      $('#rates').html(msg);
    })

    .fail(function() {
      $('aside').append('Sorry, we cannot load rates.');
    })

    .always(function() {
      var reload = '<a id="refresh" href="#">';
      reload += '<img src="img/refresh.png" alt="refresh" /></a>';
      $('#reload').html(reload);
      $('#refresh').on('click', function(e) {
        e.preventDefault();
        loadRates();
      });
    });
}

loadRates();