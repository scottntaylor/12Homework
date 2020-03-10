
$.put = function(url, data, callback, type){
 
  if ( $.isFunction(data) ){
    type = type || callback,
    callback = data,
    data = {}
  }
 
  return $.ajax({
    url: url,
    type: 'PUT',
    success: callback,
    data: data,
    contentType: type
  });
}

$(document).on("click", ".delete",function(event){
  console.log('I work')
    event.preventDefault();
    var burger_id = $(this).data("id");
      $.put("/api/burgers/" + burger_id)
      .then(() => {
        location.reload();
        console.log("Order Canceled")
      })
    
  })
  
  // When user clicks add-btn
  $("#burger-submit").on("click", function(event) {
    event.preventDefault();
  console.log("burger submitteed");
    // Make a newChirp object
    var newBurger = {
      name: $("#name").val().trim(),
      orders: $("#burger-text").val().trim(),
    };
  
    
  
  
    console.log(newBurger);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBurger)
      // On success, run the following code
      .then(function(res) {
        console.log(res)
        location.reload();
        // var row = $("<div>");
        // row.addClass("delete")
        // row.append("<p>" + res.name + "Burger ordered by: </p>");
        // row.append("<p>" + res.orders + "</p>");
        // row.append(`<button class="delete" data-id=${res.id}>`+"Eat Burger"+"</button>")
  
        // $("#newBurger-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#burger-text").val("");
  });
  
  // When the page loads, grab all of our chirps
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
        
        console.log(data[i]);
        var row = $("<div>");
        row.addClass("burgers");
  
        row.append("<p>" + data[i].name + " Burger ordered by: </p>");
        row.append("<p>" + data[i].orders + "</p>");

        // if data[i].devoured === true
        //Add to devoured as is
        //If false add a button
        //ad to non devoured area
        if(data[i].devoured === true){
          $("#devoured-area").prepend(row);
          return;
        }
        row.append(`<button class="delete" data-id=${data[i].id}>`+"Eat Burger"+"</button>")
  
        $("#newBurger-area").prepend(row);
        
      }
  
    }
  
  });