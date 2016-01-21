$(document).ready(function() {

  //define (or declare) variable of "city" as default
  var city;

  //define the function for changing the background once the submit button is clicked, we evaluate the argument "text" to compare inputs for the various cities we might change on the background.
  var changeBackgroundImage = function(text) {
    if (text === 'New York' || text === 'New York City' || text === 'NYC' ) {
      $('body').css('backgroundImage', 'url(images/nyc.jpg)' );
    }
    else if (text === 'San Francisco' || text === 'SF' || text === 'Bay Area' ) {
      $('body').css('backgroundImage', 'url(images/sf.jpg)' );
    }
    else if (text === 'Los Angeles' || text === 'LA' || text === 'LAX' ) {
      $('body').css('backgroundImage', 'url(images/la.jpg)' );
    }
    else if (text === 'Austin' || text === 'ATX' ) {
      $('body').css('backgroundImage', 'url(images/austin.jpg)' );
    }
    else if (text === 'Sydney' || text === 'SYD' ) {
      $('body').css('backgroundImage', 'url(images/sydney.jpg)' );
    }
  };

  //Selecting submit-btn class, using the click handler and passing it the argument event.
  $('.submit-btn').click(function(event) {

    //gets rid of browser's default behavior
    event.preventDefault();

    //this expression will evaluate to text value in the input field which was provided by the user.
    //this step assigns the input to city
    city = $('.city-type').val();

    //Ran console.log to check for the correct output on the console. Success.
    //console.log(city);

    changeBackgroundImage(city);

    //Once submit-btn is clicked, hide and show a new reset button option.
    $(this).hide();

    //Show reset "back" button.
    $('.reset-btn').removeClass('hide');

  });

}); // end ready
