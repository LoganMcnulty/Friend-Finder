
//require the friends data in the dat folder
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
  app.get("/api/friends/:friend", function(req, res) {
      var friend = req.params.friend;
      for (var i = 0; i < allUsers.length; i++) {
        if (friend === allUsers[i].userName) {
            return res.json(allUsers[i]);
        }
      }
      return res.json(false)
  });

// post to the friends API
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from new friend
      newFriend.userName = newFriend.userName.replace(/\s+/g, "").toLowerCase();
      console.log(newFriend);
      allUsers.push(newFriend);

    res.json(newFriend);
  });

//route for removing all friends
  app.post("/api/clearFriends", function(req,res){
    allUsers.length = 0;
    console.log(allUsers)
    res.json({ ok: true });
  })
}