var allUsers = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// return all friends data
  app.get("/api/friends", function(req, res) {
    res.json(allUsers);
  });

// Display a single friend, or return false
    // app.get("/api/friends/:friend", function(req, res) {
    //     var chosen = req.params.friend;
    //     console.log(chosen);
    //     for (var i = 0; i < allUsers.length; i++) {
    //     if (chosen === allUsers[i].name) {
    //         return res.json(allUsers[i]);
    //     }
    //     }
    //     return res.json(false);
    // });

// Create New Friends - takes in JSON input
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        // console.log(req)
        // console.log(req.body)

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.userName = newFriend.userName.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        allUsers.push(newFriend);

        res.json(newFriend);
    });
}