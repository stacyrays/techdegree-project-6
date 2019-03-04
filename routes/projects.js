const express = require("express");
const router = express.Router();
const { data } = require("../data/projectData.json");
const { projects } = data;

router.get("/", (req, res) => {
  res.render("project");
});

module.exports = router;
