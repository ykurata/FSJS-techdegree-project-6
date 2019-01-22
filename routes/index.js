const express = require('express');
const router = express.Router();

const { projects } = require('../data/projectsData.json');

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/project/:id', (req, res) => {
    // ID from the route parameter
    const { id } = req.params;
    // render 'project.pug', and passing projects and id into the template
    res.render('project', { projects, id });
});


module.exports = router;
