// $(document).ready(function() {
//   var $listItemText = $('li').text();
//   $('li').append('<i>' + $listItemText + '</i>');
// });

// Another attempt
// $(function() {
//   var $listItemText = $('li').text();
//   $('li').append('<i>' + $listItemText + '</i>');
// });

// Another attempt
// $(function() {
//   var $listItemText = $('li').text();
//   $('li').append('<i>' + $listItemText + '</i>');
// });

//$(function() {
//  $listItemText = $('li').text();
//  console.log($listItemText);
//  $('li').append('<i>' + $listItemText + '</i>');
//});



// Another try
$(function() {
  var $listItemText = $('li').text();
  $('li').append('<i>' + $listItemText + '</i>');
  $('i').on('click', function() {
    $(this).fadeOut(500);
  })
});