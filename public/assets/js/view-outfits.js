$(document).ready(function () {
  const outfitsBtn = $(".outfits-container");
  const oneOutfitContainer = $(".one-outfit-container");
  const outfitNamePlaceHolder = $(".outfit-name");
  const outfitInfoPlaceHolder = $(".outfit-information");

  outfitsBtn.on("click", function () {
    const id = $(this).data("id");
    $.get("/outfits/" + id, (response) => {
      oneOutfitContainer.css("display", "block");
      outfitNamePlaceHolder.text(response.name);
      console.log(response);
      if (response.hat_id !== null) {
        displayGarment(response.hat_id);
      };
      if (response.shirt_id !== null) {
        displayGarment(response.shirt_id);
      };
      if (response.pant_id !== null) {
        displayGarment(response.pant_id);
      };
      if (response.shoe_id !== null) {
        displayGarment(response.shoe_id);
      };
      if (response.outer_id !== null) {
        displayGarment(response.outer_id);
      };
      
    });
    console.log("Button clicked");
  });

  function displayGarment(id) {
    let garmId = id;
    // let garmType = type;

    $.ajax({
      url: "/api/garments/" + garmId,
      method: "GET",
    }).then((data) => {
      console.log(data);
      fillBox(data);
    });
  }

  function fillBox(response) {
    console.log(response.type);
    console.log(response.name);
    let garmentType = response.type;
    $(`#${garmentType}-box`).empty();
    let garmentInfo = $("<h3>").attr("data-id", `${response.id}`).text(response.name);
    $(`#${garmentType}-box`).append(garmentInfo);
  }

  // End of the document ready function
});
