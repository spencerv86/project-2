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

    console.log(newGarment);

    if (
      !newGarment.garmentType ||
      !newGarment.garmentName ||
      !newGarment.garmentColor ||
      !newGarment.garmentSize
    ) {
      alert("Please complete all fields!");
    } else {
      $.ajax({
        url: "/api/garments",
        method: "POST",
        data: newGarment,
      }).then((response) => {
        console.log(response);
        window.location.href = "/garments";
      });
    }
  });
});

//
