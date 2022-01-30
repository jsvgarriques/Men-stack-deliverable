//install express,node, make gitignore
// require node modules
const express = require('express');
//make the 'server'
const app = express();
const PORT = 1000;
// server.listen() method creates a listener on the specified 'port' or path.
app.listen(PORT, () => console.log(`port is working ${PORT}`));
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
// The get method defines a route that listens for a GET request
app.get('/', function(req, res) {
    res.send('<h1>Home Page</h1>');
  });
	

// home
app.get('/', function(req, res) {
    res.send('<h1>indexPage</h1>');
  });
// category
app.get('/all art', function(req, res) {
    res.send('<h1>all art Page</h1>');
  });
// home
app.get('/categories', function(req, res) {
    res.send('<h1>categoryPage</h1>');
  });
// categoryid
app.get('/', function(req, res) {
    res.send('<h1>indexPage</h1>');
  });
// artists
app.get('/artists', function(req, res) {
    res.send('<h1>all artist</h1>');
  });
// artisid
app.get('/artistid', function(req, res) {
    res.send('<h1>artistby id</h1>');
  });
// create form
app.get('/new', function(req, res) {
    res.send('<h1>new form</h1>');
  });
// delete form
app.get('/delete', function(req, res) {
    res.send('<h1>deletePage</h1>');
  });
// sign up form
app.get('/sign_up', function(req, res) {
    res.send('<h1>sign upPage</h1>');
  });
// Tell the app to listen on port 4000


