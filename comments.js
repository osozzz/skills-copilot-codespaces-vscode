// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments from comments.json file
const comments = require('./comments.json');

// Use express static middleware to serve static files
app.use(express.static('public'));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.render('home', { comments: comments });
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});