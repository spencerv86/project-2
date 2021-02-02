

$(document).ready(function () {
    const outfitsBtn = $(".outfits-container");
    const oneOutfitContainer = $(".one-outfit-container");
    const outfitNamePlaceHolder = $(".outfit-name");
    const outfitInfoPlaceHolder = $(".outfit-information");

    outfitsBtn.on("click", function () {
        const id = $(this).data("id");
        $.get("/outfits/" + id, ({ name }) => {
            oneOutfitContainer.css("display", "block");
            outfitNamePlaceHolder.text(name)
        })
    })


    // End of the document ready function
});