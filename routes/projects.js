const express = require("express");
const router = express.Router();
const { data } = require("../data/projectData.json");
const { projects } = data;

router.get("/", (req, res) => {
  res.redirect(`/projects/0`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const templateData = { id, projects };
  res.render("project", templateData);
});

module.exports = router;
