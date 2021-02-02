$(document).ready(function () {
    // declaring the form buttons
    const viewOutfitsBtn = $(".view-all-outfits");
    const saveOutfitsBtn = $(".save-outfits");
    const clearOutfitsBtn = $(".clear-clothes");


    const tileBox = $(".garment-tile");
    // const localStorageGarments = { ...localStorage };
    // const value = Object.values(localStorageGarments);

    let newOutfit =
    {
        hat_id: null,
        shirt_id: null,
        pant_id: null,
        shoe_id: null,
        outer_id: null
    }



    // if (localStorageGarments.length != 0) {
    //     value.forEach(garment => {
    //         const box = $("<div class='tile is-child box garment'>").append(`<span>${garment}</span>`);
    //         tileBox.append(box);
    //     });
    // }

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

        switch (type) {
            case "Hats":
                newOutfit.hat_id = id;
                break;
            case "Shirts":
                newOutfit.shirt_id = id;
                break;
            case "Pants":
                newOutfit.pant_id = id;
                break;
            case "Shoes":
                newOutfit.shoe_id = id;
                break;
            case "Outerwear":
                newOutfit.outer_id = id;
                break;

        }



        const box = $("<div class='tile is-child box garment'>").append(`<span>${name}</span>`);
        tileBox.append(box);

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


