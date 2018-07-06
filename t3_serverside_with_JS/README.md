# Server-side with JS
- Architecting modern server-side web applications using Node and Express
- Automated software testing
- Mongo
- Basic DevOps (Heroku, TravisCI, database-aas platforms)

## Overview: 
- Unit 1 covers server-side JavaScript fundamentals. 
  - The goal of this unit is to get you comfortable designing, implementing, testing, and deploying simple Express apps.
- Unit 2 is dedicated to the topic of persistence layers and data modeling. 
  - You'll learn how to provision and work with Mongo and Mongoose ORM, which allow us to manage persistence through the JavaScript layer of the application.
- In unit 3, you'll gain experience architecting complex server-side applications.
  - You'll also learn the basics of handling user authentication, account management, and access control. At the end of unit 3, you'll complete a capstone project.

---

## Server-side JS Fundamentals
- topics:
  - the basics of server-side programming with Node and Express
  - working with Glitch, a cloud-based platform for rapidly prototyping Node/Express web applications
  - routing, requests, and response objects
  - middleware
  - logging
  - setting up a local development environment
  - software testing
  - API basics
  - deploying to Heroku
  - continuous integration with Travis CI

### Lesson 1: Welcome to Server-side
- discuss what server-side programming is all about, irrespective of JavaScript, the particular language we'll be focusing on in this course.
- get an overview of Node.js and the Express application stack, and tour some simple web apps that demonstrate basic web app functionality.
- learn how to serve static assets (i.e., HTML, CSS, and client-side JavaScript files).
- discuss URL request and response objects

#### Notes/Wrap-up questions:
- Explaining in your own words what server-side programming is about.
  - a program that exposes resources (data, file, etc) to other applications
  - single server supports many **clients**
    - web server clients can be web browsers, mobile apps, or other servers
    - client apps *requests* resources from server
      - example: page searching for youtube vids. Page is client application requesting data from server (youtube api). Then server responds with requested data
    - can also send data to server (e-mail, password etc) to be stored or processed
  - should serve as reliable sources of truth
    - identical client apps should expect identical results
      - given identical requests to server
    - should assume data provided by server is consistent and correct
  - server and clients speaks **HTTP** to one another
    - client makes request to HTTP server and open a connection to server to send *request* method
      - contains request of GET, POST, PUT, PATCH, DELETE
      - HTTP protocol, version being used, and host
      - can contain a body if user is posting a form or uploading a file
      - server **response** to request consits of header and body
        - header contains metdata about response (content-type, status code)
        - response body contains requested resource (HTML Page)
  - web server route requests to right request handlers
  - server side programming is about **data persistence**
    - web server stores common set of data that all client app can access. Web servers houses the db layer
  - server side programming is about **business logic**
    - purpose is to implement one or more pieces of business logic
    - should drive decisions about URL naming schemas, db queries, etc
  - server side programming is about **security**
    - security becomes important concern, especially *access control*
      - how system ensures resources are accessible to the right users
  - server side programming is about **software testing**
    - complex quick so automated software testing is needed.
    - piece of code that checks if another piece of code behaves properly. Need to fix problems before release into production
  - server side programming is about **DevOps**
    - stands for: software **DEV**elopment + information technology **OP**eration**S**
    - need to know how to do things like provision new Heroku instances, set up continuous integrations, set up maintain DB, and version control.
- Explaining what Node and Express are.
  - **[Node.js](https://nodejs.org/en/)** allows to write JS code that executes on server
    - **Glitch** is cloud based Node environment use to practice server side programming concepts in node
      - simple [Counter App](https://glitch.com/edit/#!/express-counter-app-example)
        - index loads counter value as 0
        - link jquery and app code at public/client.js
          - ajax GET req to server for resource /the-count
        - pakage.json lists of JS libraries and other config
        - server.js: import Express to use, create new app instance
          - variable theCOunt store state for app
          - `app.use(express.static('public'));` activates static asset sharing allow serve HTML, CSS, etc from public folder
          - set up route on app that clients access with GET
          - app.listen() for server pay attention for client req at specified port and logs when it begins listening
  - **[Express](http://expressjs.com/)** is a minimalist web framework for node.js that simplifies creating modern server-side apps in Node
    - used to serve static assest like HTML, CSS, client-side JS and images
    - expose RESTful APIs that clients can make req to retrieve data
    - persist data to and retrieve from db
    - steps
      - a way to listen for HTTP requests over a port
      - a way to inspect and interact with HTTP request and response objects
      - a way to route HTTP requests from clients to the right request handlers
      - a way to serve static assets to client browsers (e.g., our route for /)
a way to serve data to clients (e.g., our route for /the-count)
- Serving static assets in an Express app.
  - **static assets**: files that don't change between requests
    - common to host static assets on content delivery network separate from Express app that provides an API to improve load times for users
  - create a folder called `public` used to hold CSS and JS files
    - `app.use(express.static('public'));` tells express app serve assets located in folder named public
      - since we set up server to serve from public, we don't need to write individual routes to load /style.css or /client.js
- Working with request and response objects in an Express app.
  - HTTP req ask servers to return a res available at a particular place
    - the host specified in req headers + path in initial line
  - server's job to route the req to correct req handler
    - needs to know how to translate info into correct res to send back
  - Requests received by Express app will have a method
    - **GET** used to read or retried res
    - **POST** used to create new res
    - **PATCH** used to update part of existing res
    - **PUT** used to replace existing res
    - **DELETE** used to delete res
  - req method along with req path used to route the req to right *request handler* 
    - func. that knows how to supply req res.
    - contain min HTTP status code and some headers (deafault 200) and content goes to response body
---

### Lesson 2: Adventure with middleware
- Node listens for HTTP request and sends an HTTP response previously. 
- **middleware** how Express performs series of steps between receive req and sending a res.
- learn about **modularization** (break Express apps into separate files or modules that import one another) and logging

#### Notes/Wrap-up Questions
- Explaining the role of middleware in Express apps.
  - organizing principle of Express apps
    - works like bucket brigade, pass req from one func to next
  - each func in middleware gets access to req, res, and `next` func
    - called to pass control to next middleware in stack
    - **All middleware must do one of 2 things: return a res or call next()**
      - otherwise will hand up or app blocked
  - when req comes to app, it will first go through the middleware func and depend what happens, may or may not end at route func
  - middleware encourages to write modular, reusable, functional code
  - app.use(someFunc) to add the middleware to our entire app, even nonexistent endpoints
    - can add single route: `app.get('/someURL', someFunc, (req, res) => res.send('request made to /someURL'));` 
- **CORS**
  - Cross origin resource sharing allow browsers make req to server on domain other than one HTMl page hosted on
  - browsers prohibits req for COR from inside script
    - some browser configured serve JSONP: JS file with single callback function that returns JS object
      - inject script tags into page to circumvent cross domain policies
    - other solution is config response headers allow scripts hosted on other domains make req to your app.
      - can tell which domains allowed to make req and what methods can use
      - need response header with ey/value pair
      - `'Access-Control-Allow-Origin', '*'`
        - indicates which origins can access the res
        - can limit to single url or wildcard * to allow any origin to req
      - `'Access-Control-Allow-Headers', 'Content-Type'`
        - indicate which header can be used in actual req
        - has something with preflighting
      - `'Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE'`
        - indicate which HTTP methods enabled for CORS req
      - ```javascript
          app.use(function (req, res, next) {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Content-Type');
          res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
          next();
        });
        ```
- handling redirects
  - sample: https://glitch.com/edit/#!/coal-verse
- Using third-party middleware and writing your own.
- Creating error-handling middleware.
  - we can use try and catch (considered 'defensive programming')
    - when working on func where have reason to believe exceptions can occur
  - how about exceptions we don't anticipate?
    - Express has its own catch-all error handling middleware func
      - ```javascript
          function logErrors(err, req, res, next) {
            console.error(err);
            return res.status(500).json({error: 'Something went wrong'})
          }
        ```
    - needs 4 params: err, req, res, next
      - err will be error obj bubbled up to middleware layer (AKA Error-First Callbacks)
- Using require and module.exports to modularize your applications.
  - good to separate into separate modules (files)
  - import local app modules using `require`
    - if modA and modB siblings and modB imports modA
      - `const modB = require('./modA')`;
      - .js suffix can be omitted, Node looks by default
    - `const {handleRedirects} = require('./middlewares/redirects');`
      - equivalent to
      - ```javascript
          const redirectMiddleware = require('./middlewares/redirects');
          const handleRedirects = redirectMiddleware.handleRedirects;
        ```
  - `module.exports = {handleRedirects};`
    - equivalent to: `module.exports = {handleRedirects: handleRedirects};`
    - only vars that the outside world can import from module are the ones explicitly exported
- Logging:
  - when things crash, **server logs** are first place you check
    - record of what happens on the server
    - min want log of HTTP requests made to server
    - IP address, time of request, req method and path, protocol, status code 
  - helps understand when errors occur and try to catch errors
- Using Morgan to log the HTTP layer of your app.
  - it is a HTTP logging middleware for Express apps
  - import morgan `const morgan = require('morgan')`
    - then tell the app to use the middleware returned by `morgan('common')`
  - initialized with 2 params: format and options
    - format determines what appear in log entries
      - can use presets or create custom formatter
      - common uses Apache server style logging
      - sample custom: `app.use(morgan(':date[iso] :method :url :response-time'));`
---

### Lesson 3: The Development Environment
- for MACs Homebrew can be used to set up Node
  - to install Homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - now you can run `brew install node`
  - can check if work by creating a console log hello world js file then run `node fileName`
- `npm install -g express-generator` to allow run express locally
  - `express hello_express` creates a new project folder with basic express app
  - now you need install dependencies listed in package.json using `npm install`
  - once done run `npm start`
- **NPM** a JS package manager used for managing software dependencies, publish packages so others can use, and running apps
  - manages software dependencies located in *package.json*
  - `mkdir learn-npm && cd learn-npm` make folder and go into
    - `npm init` initialize new NPM project
      - add name, desc, and go with defaults by press enter
      - this will create a package.json for your use
      - `npm install express` installs Express, saving into node_modules directory and adding entry into pakage.json
  - should **NOT** add node_modules folder to git.
    - create .gitignore and add in `node_modules`
    - usually other collab members run npm install when they clone
  - scripting is the scripts property in package.json
    - you can run commands that can executes tasks like start an app
  - watching changes by default you run app then when you make new changes you have to stop server and restart server
    - can use package `nodemon` to auto reload apps when source files changed and saved
    - `npm install -g nodemon` makes available globally so our local projects has access to it.
    - instead of `npm start` you can now run with `nodemon server.js` and any changes you make and then saved will update on localhost:something
- **[HEROKU](http://heroku.com/)** is a platform as a service allowing to deploy web aps to virtual machines called *dynos*
  - after you set up an account, install [Heroku Command Line](https://devcenter.heroku.com/articles/heroku-cli)
    - `brew install heroku/brew/heroku` if using mac
  - can now use heroku with `heroku login`
  - in whatever github directory in terminal enter `heroku create`
    - now ready to push to Heroku: type in `git push heroku master`
    - Use `heroku ps:scale web=1` to make sure you have dyno
    - finally you can open app with `heroku open`
- DevTools Network Panel
  - `option + command + I` to open console log then choose Network panel
  - click on 1st req to view.
    - General shows req method and status code returned with res
    - Response headers: additional info about req and res
    - Request headers: inlcuded in browser with each req. 
      - `User-Agent` header that communicates to server the type of comp and browser used to make req. can log this info to generate reports
    - Preview tab: view image and fonts sent back from server 
      - also formatted views of text content like HTML, CSS, JS
    - Response Tab: see raw resp. data include unformatted HTML, CSS, JS
    - Timing Tab: show how long took to send req, time wait res, and how long for res to be received
    - Extras: gives convenient tools to make and receive req
      - disable cache: prevent chrome using files stored in browser cache
        - good to prevent seeing changes to project
      - disabled/presets/custom: see how well website loads over slow internet connection
---

### Lesson 4: The modern Classic
- creating CRUD endpoints
- validating the contents of requests
- using Express router to modularize your apps

#### Notes
- **REST** (Representational State Transfer) is a style of software architecture, set principles for designing APIs
  - main concern is communicating the state of *resources*
    - resource: can be shopping list, blog post, representation of user etc..
  - 4 operations:
    - **Create** new resources
    - **Reading** or retrieve existing res
    - **Updating** resources
    - **Deleting** res
  - endpoints are *nouns* and we use HTTP methods as *verbs*
    - *GET* for reading, retrieving
    - *POST* for creating
    - *PUT/PATCH* for updating res
    - *DELETE* for deleting res
  - Model layer: separate storage layer (db) from our API