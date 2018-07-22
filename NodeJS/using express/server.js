// Require express and create an instance of it
var express = require('express');
var app = express();

//Require chalk for coloured console logs
var chalk = require('chalk');

// on the request to root (localhost:3000/)
app.get('/', function(req, res) {
    res.send('<b>My</b> first express http server');
});

// On localhost:3000/welcome
app.get('/welcome', function(req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// 1) Add a route that answers to all request types
app.route('/article')
    .get(function(req, res) {
        res.send('Get the article');
    })
    .post(function(req, res) {
        res.send('Add an article');
    })
    .put(function(req, res) {
        res.send('Update the article');
    });

// 2) Use a wildcard for a route
// answers to : theANYman, thebatman, thesuperman
app.get('/the*man', function(req, res) {
    res.send('the*man');
    // res.send(req.url);
});

// 3) Use regular expressions in routes
// responds to : batmobile, batwing, batcave, batarang
app.get(/bat/, function(req, res) {
    res.send('/bat/');
});

// route with parameters
// matches to : /books/stephenking/category/horror
app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    // var category = req.paramas.categorySlug;
    res.send(req.params);
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
    // console.log(chalk.red("Error 404"));
});

// start the server in the port 3000 !
var port = 3000;
app.listen(port, function() {
    console.log('First app listening on port ' + chalk.green(port));
});