const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static("public"));

app.set("view engine", "pug");
const { data } = require("data/projectsData.json");
const { projects } = data;

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project", (req, res) => {
  res.render("project");
});
