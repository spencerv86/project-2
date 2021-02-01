$(document).ready(function () {
  $("#new-garment-form").on("submit", function (event) {
    event.preventDefault();
    console.log("Submitted the form");
  });
});
