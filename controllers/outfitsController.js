const express = require("express");
const db = require("../models");
const router = express.Router();

/**
 * Route to render all outfits to a page.
 */
router.get("/outfits", function (req, res) {

  db.Outfit.findAll()
    .then((allOutfits) => {
      console.log(allOutfits);
      res.render("view-outfits", { outfits: allOutfits });
    })
    .catch((err) => {
      console.log(err);
      //TODO: render 404 page if we're unable to return outfits
      res.status(500).end();
    });
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
  db.Outfit.findAll({
    where: { id: req.params.id },
  })
    .then((singleOutfit) => {
      console.log(singleOutfit);
      res.json(singleOutfit[0]);

    })
    .catch((err) => {
      res.status(500).end();
    });
});

/**
 * API Route to create a new outfit.
 */
router.post("/api/outfits", (req, res) => {

  // had to check if the property of the object is emtpy in order to change it to null to able to store in the databe
  db.Outfit.create(
    {
      name: req.body.name ? req.body.name : null,
      hat_id: req.body.hat_id ? req.body.hat_id : null,
      shirt_id: req.body.shirt_id ? req.body.shirt_id : null,
      pant_id: req.body.pant_id ? req.body.pant_id : null,
      shoe_id: req.body.shoe_id ? req.body.shoe_id : null,
      outer_id: req.body.outer_id ? req.body.outer_id : null
    }
  )
    .then(() => {
      res.send("Outfit has been saved");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
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
