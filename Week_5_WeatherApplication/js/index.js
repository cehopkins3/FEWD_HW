$(document).ready(function() {

    var c;
    // set default variable to c.
    // set value equals undefined by default.

    var changeBackground = function(degree) {
      if (degree >= 32) {
        $('body').css('background', 'red' );
        $('body').css('color', '#fff');
      };
      if (degree < 32) {
        $('body').css('background', 'blue' );
        $('body').css('color', '#fff');
      }
    };
    //above: defining the function to change the css from grey to blue if the variable inputed is greater or equal to 32.
    //we are evaluating the argument "degree" to see if we run the function to change the background color.
    //we are asking for an argument... what is the degree so we can compare?
    //for best practice, we want to define first and then run functions. JavaScript can have scoping issues based on where / when it gets uses based on scope of

    $('.convert').click(function() {
    // selector with a click handeler listening for the click. Once the browser hears the click, we run the callback, which is a function.

    //We used [ console.log(c); ] to save and run in the DOM to test our input field. When we entered "4" for example, the DOM showed us "4" once we pressed the click button. Once confirmed, removed console.log.

      //First step
      //this is a list of directions.
      //We are assigning c to the value of the input ID (use the hashtag to call an ID) of c.
      //now the dom has c stored as a value.
      c = $('#c').val();

      //Second step
      //declaring a second variable = f
      //we assign f = the formula to conver c to f
      var f = c * (9/5) + 32;

      //Third step
      // We want to display value of f in the input field with ID of f, after running above formula.
      $( '#f' ).val( f );

      //Fourth step
      //Take the value of f run changeBackground to change the background color
      //Above, this is a function with one argument. The argument is "f"
      //See above function declaration for changeBackground: we connect degree with f becuse we pass this argument through our change background function to see, when the click event happens (see above) if we need to change the background based on the if else statement that we define below.
      //we are putting "changeBackground(f) to action - as opposed to defining the function"
      changeBackground(f);

    });

/*
    //Functions allow you to move around data that you set, declare, or define in order of top to bottom or until the variable is reset, etc. For example:

    var changeBackground = function(number){
      console.log("This is changeBackground and its number" + number);
    };
    //I'm defining the variable changeBackground but I'm not useing it... rather, I'm only declaring and defining the variable "changeBackground".

    changeBackground(111);
    //Here, I'm using the function with a number of 111.
*/

    //we have an event handler (click) listening for the selctor with a class of "reset" which is the button. When the browser hears the click, it runs a function.
    $('.reset').click(function() {

      //we we listen to the click, we want to reset both f and c values in the input fields.

      //reset variable c to equal 0.
      c = 0;

      //reset id of f to the value of 0 as well.
      $('#f').val( "" );

      //also reset the input value for id c, which we use the hashtag to call the ID.
      $('#c').val( "" );

      //when the click event occurs for our reset button, we want to use the jQuery selector for the entire body (hence no css class selector period before 'body') to change the css of the background color back to grey from red or blue back to grey.
      $('body').css('background', '#f0efef' );
      $('body').css('color', '#043049');

    });

}); // end ready
