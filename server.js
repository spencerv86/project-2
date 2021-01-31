const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const app = express();
const garmentsController = require("./controllers/garmentsController");
const outfitsController = require("./controllers/outfitsController");
const closetsController = require("./controllers/closetsController");


app.use(express.static("public"));
app.use(garmentsController);
app.use(outfitsController);
app.use(closetsController);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
