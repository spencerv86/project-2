$(document).ready(function () {
    $("#update-garment-form").on("submit", function (event) {
      event.preventDefault();
      console.log("Submitted the form");
  
      const newGarment = {
        type: $("#garmentType").val(),
        name: $("#garmentName").val(),
        color: $("#garmentColor").val(),
        size: $("#garmentSize").val(),
      };
  
      console.log(newGarment);
  
      if (
        !newGarment.type ||
        !newGarment.name ||
        !newGarment.color ||
        !newGarment.size
      ) {
        alert("Please complete all fields!");
      } else {
        $.ajax({
          url: "/api/garments/:id",
          method: "PUT",
          data: newGarment,
        }).then((response) => {
          console.log(response);
          window.location.href = "/garments";  
        });
      }
    });
  });
  
  //
  