// Import express
const express = require('express');
const cors = require('cors')
const phonebook = require('./routes/phonebook');
const bundle = require('./routes/bundle.js');

// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());

// use routes
app.use(phonebook);
app.use(bundle);
// use static builds
app.use(express.static('./build/'));


// Setup server port
const port = process.env.PORT || 80;


// Launch app to listen to specified port
app.listen(port, function() {
  console.log('Running on port ' + port);
});
