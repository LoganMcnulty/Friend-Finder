var path = require("path");

module.exports = function(app) {
// Routes
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/all-friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/all-friends.html"));
    });

// default route redirects to home page
    app.get('*',function (req, res) {
        res.redirect('/');
    });
}


