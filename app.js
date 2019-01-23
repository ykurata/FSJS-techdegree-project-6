// dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use('/static', express.static('public'));

// Set view engine as pug
app.set('view engine', 'pug');

const routes = require('./routes/index.js');

app.use(routes);




// middleware to create a new error and set status code
app.use((req, res, next) => {
  const err = new Error("Page not found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  console.log("There was an error!")
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


// Runing the app
app.listen(3000, () => {
console.log('The application is running on localhost:3000');
});
