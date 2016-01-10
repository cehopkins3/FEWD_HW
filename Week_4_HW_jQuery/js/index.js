$(document).ready(function() {

  $( 'a' ).click(function( event ) {
    event.preventDefault();
    $( '<div>' )
      .append( 'default ' + event.type + ' prevented' )
      .appendTo( '#log' );
  });

  $('.readmore').click(function () {
    $('.show-this-on-click').slideDown( 'slow');

    $('.readless').show()

    $('.readmore').hide()
  });

  $('.readless').click(function () {
    $('.show-this-on-click').slideUp('slow', function(){
      $('.readmore').show();
    });

    $('.readless').hide()

  });

  $('.learnmore').click(function () {
    $('.learnmoretext').slideDown();

    $('.learnmore').hide()

  });

});
