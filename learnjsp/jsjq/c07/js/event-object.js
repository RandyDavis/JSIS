// $(function() {

//   $('li').on('click', function(e) {
//     $('li span').remove();
//     var date = new Date();
//     date.setTime(e.timeStamp);
//     var clicked = date.toDateString();
//     $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
//   });

// });

// Another attempt
// $(function() {
//   $('li').on('click', function(e) {
//     $('li span').remove();
//     var date = new Date();
//     date.setTime(e.timeStamp);
//     var clicked = date.toDateString();
//     $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
//   });
// });



// Another attempt
//$(function() {
//  $('li').on('click mouseover', function(e) {
//    $('li span').remove();
//    var date = new Date();
//    date.setTime(e.timeStamp);
//    var clicked = date.toDateString();
//    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
//  });
//
//  $('li').on('mouseout', function() {
//    $('li span').remove();
//  });
//});


// Another try
$(function() {
  $('li').on('click mouseover', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });

  $('li').on('mouseout', function() {
    $('li span').remove();
  });
});