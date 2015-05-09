// $(function() {
//   $('li:contains("pine")').text('almonds');
//   $('li.hot').html(function() {
//     return '<em>' + $(this).text() + '</em>';
//   });
//   $('li#one').remove();
// });

// Another attempt
// $(function() {
//   $('li:contains("pine")').text('almonds');
//   $('li.hot').html(function() {
//     return '<em>' + $(this).text() + '</em>';
//   });
//   $('li#one').remove();
// });

// Another attempt
// $(function() {
//   $('li:contains("pine")').text('almondy');
//   $('li.hot').html(function() {
//     return '<em>' + $(this).text() + '</em>';
//   });
//   $('li#one').remove();
// });

// Another attempt
$(function() {
  $('li:contains("pine")').text('Piney Nuts');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});