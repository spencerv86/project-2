const express = require("express");
const db = require("../models");
const router = express.Router();

/**
 * Route to render all closets to a page.
 */
// router.get("/closets", function (req, res) {
//   // db.Closet.findAll()
//   //   .then((allGarments) => {

//   //     res.render("view-closet", { garments: allGarments });
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //     //TODO: render 404 page if we're unable to return garments
//   //     res.status(500).end();
//   //   });



// });

// router.get("/api/closets", function (req, res) {
//   db.Garment.findAll()
//     .then((allGarments) => {
//       console.log(allGarments)
//       res.json(allGarments);
//     })
//     .catch((err) => {
//       console.log(err);
//       //TODO: render 404 page if we're unable to return garments
//       res.status(500).end();
//     });



// });

/**
 * Route to pull closet data from the database
 * Render the closet data to a pre-populate form.
 */
router.get("/closets/:id/edit", (req, res) => {
  res.send("Pulls garment data from the form");

  //   db.Closet.findOne({ where: { id: req.params.id } })
  //     .then((singleCloset) => {
  //       res.render("edit-closet", singleCloset.dataValues);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(404).end();
  //     });
});

/**
 * Display information about a single closet
 */
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

  //   db.Closet.findOne({
  //     where: { id: req.params.id },
  //   })
  //     .then((singleCloset) => {
  //       // console.log(singleCloset.dataValues);
  //       res.render("single-closet", singleCloset.dataValues);
  //     })
  //     .catch((err) => {
  //       res.status(500).end();
  //     });
});

/**
 * API Route to create a new closet.
 */
router.post("/api/closets", (req, res) => {
  // db.Closet.create(req.body)
  //   .then((createdCloset) => {
  //     res.json(createdCloset);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).end();
  //   });
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

/**
 * API Route to delete a closet by ID
 */
router.delete("/api/closets/:id", (req, res) => {
  //   db.Closet.delete({
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
