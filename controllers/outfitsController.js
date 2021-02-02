const express = require("express");
const db = require("../models");
const router = express.Router();

/**
 * Route to render all outfits to a page.
 */
router.get("/outfits", function (req, res) {
  res.render("view-outfits");
  //   db.Outfit.findAll()
  //     .then((allOutfits) => {

  //        res.render("all-outfits", { outfits: allOutfits });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       //TODO: render 404 page if we're unable to return outfits
  //       res.status(500).end();
  //     });
});

/**
 * Route to pull outfit data from the database
 * Render the outfits data to a pre-populate form.
 */
router.get("/outfits/:id/edit", (req, res) => {
  res.send("Pulls outfit data from the form");

  //   db.Outfit.findOne({ where: { id: req.params.id } })
  //     .then((singleOutfit) => {
  //       res.render("edit-outfit", singleOutfit.dataValues);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(404).end();
  //     });
});

/**
 * Display information about a single outfit
 */
router.get("/outfits/:id", (req, res) => {
  res.send("Returns single outfit");

  //   db.Outfit.findOne({
  //     where: { id: req.params.id },
  //   })
  //     .then((singleOutfit) => {
  //       // console.log(singleOutfit.dataValues);
  //       res.render("single-outfit", singleOutfit.dataValues);
  //     })
  //     .catch((err) => {
  //       res.status(500).end();
  //     });
});

/**
 * API Route to create a new outfit.
 */
router.post("/api/outfits", (req, res) => {
  console.log(req.body);
  res.send("Route to create a new outfit");
  // db.Outfit.create(req.body)
  //   .then((createdOutfit) => {
  //     res.json(createdOutfit);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).end();
  //   });
});

/**
 * API Route to update an existing garment by ID
 */
router.put("/api/outfits/:id", (req, res) => {
  db.Outfit.update(req.body, {
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
router.delete("/api/outfits/:id", (req, res) => {
  //   db.Outfit.delete({
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
