$(document).ready(function () {
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

    //     const viewAll = () => {
    //         const panel = $(".panel");
    //         console.log(panel)


    //         $.get("/api/closets", (data) => {
    //             data.forEach(garment => {
    //                 const panelBlock = $("<a class='panel-block'></a>")
    //                 const panelIconAdd = $("<span class='panel-icon add'><i class='fas fa-plus' aria-hidden='true'></i></span>");
    //                 const panelIconDelete = $("<span class='panel-icon delete'><i class='fas fa-trash-alt' aria-hidden='true'></i></span>");
    //                 panelBlock.append(`<span>${garment.name}</span>`);
    //                 panelBlock.append(panelIconAdd, panelIconDelete);
    //                 panel.append(panelBlock);
    //                 console.log(garment)
    //             })

    //         })
    //     }
    // })

    // const viewTop = () => {

    //     $.get("/api/closets", (data) => {
    //         data.forEach(garment => {
    //             const panelBlock = $("<a class='panel-block'></a>")
    //             const panelIconAdd = $("<span class='panel-icon add'><i class='fas fa-plus' aria-hidden='true'></i></span>");
    //             const panelIconDelete = $("<span class='panel-icon delete'><i class='fas fa-trash-alt' aria-hidden='true'></i></span>");
    //             panelBlock.append(`<span>${garment.name}</span>`);
    //             panelBlock.append(panelIconAdd, panelIconDelete);
    //             panel.append(panelBlock);
    //             console.log(garment)
    //         })

    //     })

    // }

    // const viewBottom = () => {

    //     $.get("/api/closets", (data) => {
    //         data.forEach(garment => {
    //             const panelBlock = $("<a class='panel-block'></a>")
    //             const panelIconAdd = $("<span class='panel-icon add'><i class='fas fa-plus' aria-hidden='true'></i></span>");
    //             const panelIconDelete = $("<span class='panel-icon delete'><i class='fas fa-trash-alt' aria-hidden='true'></i></span>");
    //             panelBlock.append(`<span>${garment.name}</span>`);
    //             panelBlock.append(panelIconAdd, panelIconDelete);
    //             panel.append(panelBlock);
    //             console.log(garment)
    //         })

    //     })

    // }

    // const viewShoes = () => {

    //     $.get("/api/closets", (data) => {
    //         data.forEach(garment => {
    //             const panelBlock = $("<a class='panel-block'></a>")
    //             const panelIconAdd = $("<span class='panel-icon add'><i class='fas fa-plus' aria-hidden='true'></i></span>");
    //             const panelIconDelete = $("<span class='panel-icon delete'><i class='fas fa-trash-alt' aria-hidden='true'></i></span>");
    //             panelBlock.append(`<span>${garment.name}</span>`);
    //             panelBlock.append(panelIconAdd, panelIconDelete);
    //             panel.append(panelBlock);
    //             console.log(garment)
    //         })

    //     })

    // }



})