// Here I use JavaScript to add the "toggle" class when the icon is clicked.
// The "toggle" class is how you interact with the icon to change its state.
$(document).ready(function() {
  $('.anico').click(function() {
    $(this).toggleClass('toggle');
  });
});
