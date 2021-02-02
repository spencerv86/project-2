const express = require("express");
const exphbs = require("express-handlebars");

const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const PORT = process.env.PORT || 8080;

const app = express();
const db = require("./models");

const garmentsController = require("./controllers/garmentsController");
const outfitsController = require("./controllers/outfitsController");
const closetsController = require("./controllers/closetsController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.use(garmentsController);
app.use(outfitsController);
app.use(closetsController);

// app.use("/garments", garmentsController);
// app.use("/closet", closetsController);
// app.use("/outfits", outfitsController);

// db.sequelize
//   .sync()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
})

