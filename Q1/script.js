$(document).ready(function() {
  $("#submit").click(function() {
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var favoriteFood = $("#favorite-food").val();
    var arrivalTime = $("#arrival-time").val();

    var data = {
      firstName: firstName,
      lastName: lastName,
      favoriteFood: favoriteFood,
      arrivalTime: arrivalTime
    };

    $.ajax({
      type: "POST",
      url: "localhost:3000/submit-form",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(result) {
        alert("Data sent to the server: " + JSON.stringify(result));
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
});
