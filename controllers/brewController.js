const express = require("express");
const router = express.Router();
const Drink = require("../models/Drink");
const User = require("../models/User");

// EXAMPLE TO TEST
// {
    // "method": "chemex", 
    // "size": "small", 
    // "strength": "strong", 
    // "roast": "light", 
    // "rating": 3, 
    // "favorite": true, 
    // "notes": "Black Coffee!"
// }

//POST TO CREATE DRINK PREFERENCES FOR EACH USER
router.post("/:username", (req, res) => {
  console.log("BEHOLD MY BODY");
  console.log(req.body.method);
    Drink.create({method:req.body.method, size:req.body.size,strength:req.body.strength, roast:req.body.roast}  )
    .then(({ _id }) => User.findOneAndUpdate({username: req.params.username}, { $push: { drinks: _id } }, { new: true }))
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports = router;