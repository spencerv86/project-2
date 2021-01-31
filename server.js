const express = require("express");
const exphbs = require("express-handlebars");
const ClosetController = require("./controllers/closetController");
const GarmentsController = require("./controllers/garmentsController");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index")
})
app.use("/garments", GarmentsController);
app.use("/closet", ClosetController);


app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
