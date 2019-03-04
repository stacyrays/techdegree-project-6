const express = require("express");
const router = express.Router();
const { data } = require("../data/projectData.json");
const { projects } = data;

/*router.get("/", (req, res) => {
  const projectName = projects[0].project_name;
  const projectThumbnail = projects[0].image_urls[0];
  const templateData = { projectName, projectThumbnail };
  res.render("index", templateData);
});*/

router.get("/", (req, res) => {
  const templateData = { projects };
  res.render("index", templateData);
});

/*router.get("/", (req, res) => {
  const numberOfProjects = projects.length;
  const id = 0;
  const projectName = projects[id].project_name;
  const projectThumbnail = projects[id].image_urls[0];
  //const templateData = { project0Name, project0Thumbnail };
  const templateData = { numberOfProjects, id, projectName, projectThumbnail };
  res.render("index", templateData);
});*/

module.exports = router;
