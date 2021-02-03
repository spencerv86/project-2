const express = require("express");
const db = require("../models");
const router = express.Router();


router.get("/closets/:type", (req, res) => {
  // res.send("Returns single closet");
  showType = req.params.type;
       db.Garment.findAll({
         where: {
           type: showType
         }
       })
        .then((allGarments) => {

           res.render("all-garments", { garments: allGarments });
        // res.render("all-garments");
        })
        .catch((err) => {
          console.log(err);
          //TODO: render 404 page if we're unable to return garments
          res.status(500).end();
        });
});

/**
 * API Route to update an existing closet by ID
 */
router.put("/api/closets/:id", (req, res) => {
  db.Closet.update(req.body, {
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

module.exports = router;
