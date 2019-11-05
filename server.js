// require NPMs
  const express = require('express')
  const path = require('path');
 
// Setup the express app
  const app = express()
  var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

// Require routing paths
  require('./app/routing/apiRoutes')(app);
  require('./app/routing/htmlRoutes')(app);

// Starts the server
  app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
  });