$(document).ready(function() {

  //create initial array, consisting of strings listing out our different city options.
  var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

  //set up forEach loop function
  cities.forEach(function (item, index) {

    //Step 1: create an option element for each HTML tag option by loopking through the array and creating a variable for each city.
    var city = document.createElement('option');

    //Step 2: Assign option element created as setting words to display value of item in array
    //display the correct words in the array
    city.textContent = item

    //Step 3: Append to show up on frontend
    $('.city-type').append(city);

  });

  //Step 4: Change container background once an option in the dropdown is selected.

  //selected city-type class on the option, and put a change handler on it to listen for an event, since city = event (not a variable)
  //listen for the class of city-type to change
  $('.city-type').change(function(event){

    //target the actual HTML
    console.log(event.target);

    //'.city-type' is a form. When you choose a selection, you are putting in input. Here, we take the value of the input field.
    //know which city was clicked
    console.log($('.city-type').val());

    //establish selected city saved on the DOM as a var called city. City was previously only an event, so we can still use "city" in this case.
    var city = ($('.city-type').val());

    //ran debugger to inspect city
    //debugger;

    //apply conditional if statement for first string and else if statements for following strings to use the .attr class to change the class of the body to the new class with associated picture.
    if (city === 'NYC'){
      $('body').attr('class', 'nyc');
    } else if (city === 'SF'){
      $('body').attr('class', 'sf');
    } else if (city === 'LA'){
      $('body').attr('class', 'la');
    } else if (city === 'ATX'){
      $('body').attr('class', 'austin');
    } else if (city === 'SYD'){
      $('body').attr('class', 'sydney');
    } else {
      $('body').attr('class', '');
    }

    debugger;
  });

}); // end ready
