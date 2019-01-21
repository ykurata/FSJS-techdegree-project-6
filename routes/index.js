const express = require('express');
const router = express.Router();

const { projects } = require('../data/projectsData.json');


router.get('/', (req, res) => {
  res.render('index', { title: projects[0].project_name});
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/project', (req, res) => {
  res.render('project');
});

module.exports = router;
