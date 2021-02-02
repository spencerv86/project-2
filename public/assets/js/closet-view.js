$(document).ready(function () {


    const tileBox = $(".garment-tile");
    const localStorageGarments = { ...localStorage };
    const value = Object.values(localStorageGarments);

    if (localStorageGarments.length != 0) {
        value.forEach(garment => {
            const box = $("<div class='tile is-child box garment'>").append(`<span>${garment}</span>`);
            tileBox.append(box);
        });
    }

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

        localStorage.setItem(id, name);


        const box = $("<div class='tile is-child box garment'>").append(`<span>${name}</span>`);
        tileBox.append(box);

    })

    /**
 * Listening to the delete icon.
 * Deleting the garment based on the id
 */
    $(".fa-trash-alt").on("click", function () {
        const id = $(this).data("id")
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

})