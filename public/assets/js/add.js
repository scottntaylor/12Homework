// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#order-button").on("click", function(event) {
    event.preventDefault();
  
  var newBurger = {
    burger_name: $("#burgerName").val().trim(),
    devoured: 0
  }
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBurger)
      // On success, run the following code
      .then(function(results) {
        // Log the data we found
        var burgerButton = $("<div>");
        burgerButton.addClass("burger");
        burgerButton.addClass("delete");
        burgerButton.append("<p>" + burger_name + "<p>");
        

        console.log(data);

        $("#burgersToEat").append(burgerButton);
      });
  

  
  });
  