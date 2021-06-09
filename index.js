import './style.css';

$(document).ready(function() {
  $('#button').click(function() {
    var toAdd = $('input[name=itemCompras]').val();
    $('ol').append('<li>' + toAdd + '</li>');
    $('input').val('');
  });
});
