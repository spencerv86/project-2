$(document).ready(function () {
  $("#new-garment-form").on("submit", function (event) {
    event.preventDefault();
    console.log("Submitted the form");

    const newGarment = {
      garmentType: $("#garmentType").val(),
      garmentName: $("#garmentName").val(),
      garmentColor: $("#garmentColor").val(),
      garmentSize: $("#garmentSize").val(),
    };

    console.log(newGarment)
  });
});
