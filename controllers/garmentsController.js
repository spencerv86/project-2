const express = require("express");
const db = require("../models");
const router = express.Router();

/**
 * Route to render all garments to a page.
 */

router.get("/garments", function (req, res) {
    res.render("add-garments");
})

router.get("/closets", function (req, res) {

    db.Garment.findAll()
        .then((allGarments) => {
            res.render("view-closet", { garments: allGarments });
        })
        .catch((err) => {
            console.log(err);
            //TODO: render 404 page if we're unable to return garments
            res.status(500).end();
        });
});



router.get("/garments/:name", function (req, res) {
    db.Garment.findAll({
        where: {
            type: req.params.name
        }
    })
        .then((allGarments) => {
            console.log(allGarments)
            res.render("view-closet", { garments: allGarments })
        })
        .catch((err) => {
            console.log(err);
            //TODO: render 404 page if we're unable to return garments
            res.status(500).end();
        });
})

/**
 * Route to pull garment data from the database
 * Render the garment data to a pre-populate form.
 */
router.get("/garments/:id/edit", (req, res) => {
      db.Garment.findOne({ where: { id: req.params.id } })
        .then((singleGarment) => {
          res.render("edit-garments");
        //   , singleGarment.dataValues);
        })
        .catch((err) => {
          console.log(err);
          res.status(404).end();
        });
});

/**
 * Display information about a single garment
 */
router.get("/garments/:id", (req, res) => {
    res.send("Returns single garment");

    //   db.Garment.findOne({
    //     where: { id: req.params.id },
    //   })
    //     .then((singleGarment) => {
    //       // console.log(singleGarment.dataValues);
    //       res.render("single-garment", singleGarment.dataValues);
    //     })
    //     .catch((err) => {
    //       res.status(500).end();
    //     });
});

/**
 * API Route to create a new garment.
 */
router.post("/api/garments", (req, res) => {
    db.Garment.create(req.body)
        .then((createdGarment) => {
            res.json(createdGarment);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});

/**
 * API Route to update an existing garment by ID
 */
router.put("/api/garments/:id", (req, res) => {
    db.Garment.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).end();
        });
});

/**
 * API Route to delete a garment by ID
 */
router.delete("/api/garments/:id", (req, res) => {
    //   db.Garment.delete({
    //     where: {
    //       id: req.params.id,
    //     },
    //   })
    //     .then((result) => {
    //       res.json(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       res.status(404).end();
    //     });
});

module.exports = router;
