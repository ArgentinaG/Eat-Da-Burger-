// Create a submit function that will be available to execute when the document is ready
// When the button is push it will execute the function and it will execute a put ajax's method
 
$( document ).ready(function() {
    
$( ".devour-form" ).submit(function( event ) {
    event.preventDefault();
    var bcID = $(this).children(".burger_id").val();
    console.log(bcID);
  });

});