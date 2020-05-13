const express = require("express");
const router = express.Router();
const verify = require("./verifyTokenController");
// const User = require("../models/User");

// router.get("/",verify, (req, res) => {
//     res.json({posts:{title:"post", description: "data you cannot access if you are not logged in"}})
// });

router.get("/",verify, (req, res) => {
    res.send(req.userExists);
    // User.findById({_id: req.userExists})
});

module.exports = router;