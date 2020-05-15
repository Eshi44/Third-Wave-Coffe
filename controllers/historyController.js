const express = require("express");
const router = express.Router();
const Drink = require("../models/Drink");
const User = require("../models/User");

// GET ALL DRINKS FROM ONE USER
router.get("/", (req, res) => {
    Drink.find({})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});
//GET for one drink


// UPDATE NOTES FOR ONE DRINK
router.put("/update/notes/:id", (req, res) => {
    Drink.findAndModify({notes: ""})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});
//UPDATE RATING
router.put("/update/ratings/:id", (req, res) => {
    Drink.findAndModify({rating: ""})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});

// let id = {
//     _id: ObjectID(req.params.id)
//   };

//   dbase.collection("name").update({_id: id}, {$set:{'first_name': req.body.first_name, 'last_name': req.body.last_name}}, (err, result) => {
//     if(err) {
//       throw err;
//     }
//     res.send('user updated sucessfully');
//   });
// });

//DELETE DRINK
router.delete("/delete", (req, res) => {
    Drink.deleteOne({})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;