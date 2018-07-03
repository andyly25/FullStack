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
    - securitu becomes important concern, especially *access control*
      - how system ensures resources are accessible to the right users
  - server side programming is about **software testing**
    - complex quick so automated software testing is needed.
    - piece of code that checks if another piece of code behaves properly. Need to fix problems before release into production
  - server side programming is about **DevOps**
    - stands for: software **DEV**elopment + information technology **OP**eration**S**
    - need to know how to do things like provision new Heroku instances, set up continuous integrations, set up maintain DB, and version control.
- Explaining what Node and Express are.
  - **[Node.js](https://nodejs.org/en/)** allows to write JS code that executes on server
    - **Glitch** is cloud based Node environment use to practice server side programming conceps in node
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
