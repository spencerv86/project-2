$(document).ready(function () {
    // declaring the form buttons
    const viewOutfitsBtn = $(".view-all-outfits");
    const saveOutfitsBtn = $(".save-outfits");
    const clearOutfitsBtn = $(".clear-clothes");


    const tileBox = $(".garment-tile");


    // listening to the icons to show garments
    const btn = $(".garment-view").on("click", function () {
        const type = $(this).data("name");
        console.log(type)

        $.get("/garments/" + type, (data) => {
            console.log("hello");
            if (type == undefined) {
                window.location.href = "/closets/"
            } else {
                window.location.href = "/garments/" + type
            }

        })
    })

    // listening to the add icon
    $(".fa-plus").on("click", function () {
        const id = $(this).data("id");
        const name = $(this).data("name");
        const type = $(this).data("type");



        $.ajax({
            url: "/api/garments/" + id,
            method: "GET",
        }).then((response) => {
            console.log(response[0])
            fillBox(response[0].type, response[0].name)
        });

        function fillBox(type, name) {
            console.log(type);
            console.log(name)
            let garmentType = type
            $(`#${garmentType}-box`).empty();
            let garmentInfo = $("<h3>").attr("data-id", `${id}`).text(name);
            $(`#${garmentType}-box`).append(garmentInfo);
        }

    })

    /**
 * Listening to the delete icon.
 * Deleting the garment based on the id
 */
    $(".fa-trash-alt").on("click", function () {
        const id = $(this).data("id");

        $.ajax("/api/garments/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Garment deleted");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })


    // event listener that will save the outfits in the database
    saveOutfitsBtn.on("click", () => {
        $.ajax("/api/outfits", {
            method: "POST",
            data: { newOutfit }
        }).then(() => {
            console.log("new outfit created");
        })
    })


    // View outfit btn event listener. it redirects the page to the view outfits route
    viewOutfitsBtn.on("click", () => {
        console.log("hello")
        window.location.href = "/outfits"
    })

    // end of the document function......
});


