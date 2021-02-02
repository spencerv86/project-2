$(document).ready(function () {
  const tileBox = $(".garment-tile");

  function loadLocal(type) {
    let response = JSON.parse(localStorage.getItem(type));
    // console.log(response);
    if (response !== null) {
      let garmentType = response.type;
      //   console.log(response.type);
      $(`#${garmentType}-box`).empty();
      let garmentInfo = $("<h3>")
        .attr("data-id", `${response.id}`)
        .text(response.name);
      $(`#${garmentType}-box`).append(garmentInfo);
    }
  }
  loadLocal("Shirt");
  loadLocal("Hats");
  loadLocal("Pants");
  loadLocal("Shoes");
  loadLocal("Outerwear");

  // listening to the icons to show garments
  const btn = $(".garment-view").on("click", function () {
    const type = $(this).data("name");
    console.log(type);

    $.get("/garments/" + type, (data) => {
      console.log("hello");
      if (type == undefined) {
        window.location.href = "/closets/";
      } else {
        window.location.href = "/garments/" + type;
      }
    });
  });

  // listening to the add icon
  $(".fa-plus").on("click", function () {
    const id = $(this).data("id");
    const name = $(this).data("name");

    $.ajax({
      url: "/api/garments/" + id,
      method: "GET",
    }).then((response) => {
      console.log(response[0]);
      fillBox(response[0]);
    });

    function fillBox(response) {
      console.log(response.type);
      console.log(response.name);
      let garmentType = response.type;
      $(`#${garmentType}-box`).empty();
      let garmentInfo = $("<h3>").attr("data-id", `${id}`).text(response.name);
      $(`#${garmentType}-box`).append(garmentInfo);
      // let savedItems = {"itemName":response.name, "itemID":response.id}
      localStorage.setItem(garmentType, JSON.stringify(response));
    }
  });

  /**
   * Listening to the delete icon.
   * Deleting the garment based on the id
   */
  $(".fa-trash-alt").on("click", function () {
    const id = $(this).data("id");
    const type = $(this).data("type");
    let currentSpot = JSON.parse(localStorage.getItem(type))
    $.ajax("/api/garments/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("Garment deleted");
      if (currentSpot.id === id){
        localStorage.removeItem(type);
        location.reload();
    }
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
