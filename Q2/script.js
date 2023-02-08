$(document).ready(function() {
  $("#ask-8-ball").click(function() {
    var question = $("#question").val();

    $.ajax({
      type: "GET",
      url: "/8ball",
      data: { question: question },
      success: function(answer) {
        $("#question").val(answer);
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
});
