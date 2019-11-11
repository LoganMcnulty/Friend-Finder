# Friend Wizard
- Javascript friend compatibility application requiring the express web application framework, hosted on Heroku. 

**ABOUT THIS APP** 
- The Friend Wizard is a javascript applications that recreates the process in which dating websites were created. A user creates a profile, completes a survey, and javascript compares the respsones to the survey to other members of the website. 

- Express is the only external (to node) NPM that is required for running the applications. The rest is standard javascript and HTML. Express is required as the web framework for getting, and posting data to the Friends API, as well displaying the correct HTML page, which is determined by the URL that is visited. 

- Path is a node module that is required for working with file and directory locations in the /routing/ htmlRoutes.js

**Link to Heroku**
https://friend-wizard.herokuapp.com/all-friends

**Purpose of this app**
- This app was fundamental in solidifying the programmer's (myself, Logan McNulty) knowledge of working with the express web framework. It instilled the purpose of, and methods required to, create an API. Previously the programmer was familiar with making get requests to third party APIs using AJAX calls. Having outlined the steps required to set up a server, define the paths required for routing, posting data to the friends API, and retrieving it in real time, brought the API and webframework process "full circle". 

- The app also was fundamental in familiarizing the programmer with hosting websites via Heroku. Separate from the walkthrough process on the Heroku website, the programmer had to redefine their package.json {script} in order for Heroku to know which command is required to start the server and application.

**Modules required, and their Documentation Links**
- Express webframework 
https://expressjs.com/en/api.html

- Path (node.js module)
https://nodejs.org/api/path.html