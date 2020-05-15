const express = require("express");
const router = express.Router();
const Drink = require("../models/Drink");
const User = require("../models/User");

// EXAMPLE TO TEST
// {
//     "method": "chemex", 
//     "size": "small", 
//     "strength": "strong", 
//     "roast": "light", 
//     "rating": 3, 
//     "favorite": true, 
//     "notes": "Black!"
// }

//POST TO CREATE DRINK PREFERENCES FOR EACH USER
router.post("/", ({body}, res) => {
    Drink.create(body)
    .then(({ _id }) => User.findOneAndUpdate({}, { $push: { drinks: _id } }, { new: true }))
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports = router;