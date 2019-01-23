const express = require('express');
const router = express.Router();

// projects from projectsData.json
const { projects } = require('../data/projectsData.json');


// index route
router.get('/', (req, res) => {
  res.render('index', { projects });
});


// about route
router.get('/about', (req, res) => {
  res.render('about');
});


// project route
router.get('/project/:id', (req, res) => {
    // ID from the route parameter
    const { id } = req.params;
    // render 'project.pug', and passing projects and id into the template
    res.render('project', { projects, id });
});


module.exports = router;
