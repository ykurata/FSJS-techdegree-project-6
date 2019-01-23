# Static Node.js and Express Site

So far you've worked with a lot of "client-side" JavaScript. Which is just an industry way of saying JavaScript in the browser. All of the JavaScript you've written for the first five projects in this Techdegree is run right in the browser. Now it's time to continue your journey out of the browser and start writing some powerful "server-side" JavaScript.

In this project, you'll create a gorgeous portfolio site to showcase the great projects you've built. The site will contain a modern landing page, an about page where you'll have a chance to share contact info, practice your elevator pitch and talk a little about yourself, and a series of project pages to show off and detail at least your first five projects from this Techdegree.

You'll create a JSON file to store all the data about the projects you've created.

You'll use Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

You'll use Node.js and Express to:

* Import the required dependencies
* Link the JSON with the Pug templates
* Set up routes to handle requests
* Set up the middleware to utilize static files like CSS
* Handle errors
* Handle errors


## Project Instructions

* Initialize your project
  * Open the command line, navigate to your project, and run the npm init command to set up your package.json file.

* Add your dependencies
  * At a minimum, your project will need Express and Pug installed via the command line.
  * Don't forget to use the --save flag if you're using a version of npm prior to 5.0, to ensure that references to the dependencies are stored in your package.json file.

* Handle files and folders that shouldn't be stored in your repo
  * Create a .gitignore file in your directory and save a reference to the node_modules folder so that your repo doesn't store or track that folder.

* Images
  * Create an images folder in your directory to store your images.
  * Add a profile pic of yourself that you would feel comfortable sharing with potential employers. It should present well at 550px by 350px.
  * Take screenshots of your projects. You will need at least two screenshots for each project.

* Add your project data to your directory
  * Create a data.json file at the root of your directory

* Setup your server, routes and middleware
  * Create an app.js file at the root of your directory.
  * Add variables to require the necessary dependencies. You'll need to require:
    * Express
    * Your data.json file
  * Set up your middleware:
    * set your “view engine” to “pug”
    * use a static route and the express.static method to serve the static files located in the public folder
  * Set your routes. You'll need:
    * An "index" route (/) to render the "Home" page with the locals set to data.projects
    * An "about" route (/about) to render the "About" page
    * Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
  * Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to.

* Handle errors
  * If a user navigates to a non-existent route, or if a request for a resource fails for whatever reason, your app should handle the error in a user friendly way.
  * Add an error handler to app.js that sets the error message to a user friendly message, and sets the status code.
  * Log out a user friendly message to the console when the app is pointed at a URL that doesn't exist as a route in the app, such as /error/error.

* Complete your Pug files

* Layout, CSS and styles

* Layout, CSS and styles  


## Extra Credit

* Customize the package.json file
  * Set up your package.json file so that running npm start will run the app.

* Use error handling middleware to render a Pug template
  * Create a new Pug template in the views folder and name it error.pug. This Pug file should extend the layout, be set to block content, and display the error.message, error.status, and error.stack properties.
  * When the request URL is for a non-existent route, the error.pug template should be displayed in the browser along with the following properties:
    * error.message
    * error.status
    * error.stack

* Customize the style    
