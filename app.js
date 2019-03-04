const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static("public"));

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");

app.use(mainRoutes);
app.use("/projects", projectRoutes);

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
