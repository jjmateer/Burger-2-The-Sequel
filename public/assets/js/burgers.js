$(document).ready(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    // var newBurger = {
    //   burger_name: $("#burgerInput").val().trim(),
    //   devoured: false
    // };
    $.post("/api/burgers", {
      type: "POST",
      burger_name: $("#burgerInput").val().trim(),
      devoured: false
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
    $(".change-devoured").on("click", function (event) {
      event.preventDefault();
    var id = $(this).data("id");
    // var newdevoured = $(this).data("devoured");
    console.log(id)
    $.ajax("/api/burgers/" + id, {
      method: "PUT",
      data: {
        devoured: true
      }
    }).then(
      function() {
        location.reload();
      }
    );
  });
});