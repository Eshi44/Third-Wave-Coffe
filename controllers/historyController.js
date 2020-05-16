const express = require("express");
const router = express.Router();
const Drink = require("../models/Drink");
const User = require("../models/User");

// GET ALL DRINKS FROM ONE USER
router.get("/all/:username", (req, res) => {
	Drink.find({})
		.then(({}) => User.findOne({ username: req.params.username }))
		.then((db) => {
			res.json(db);
		})
		.catch((err) => {
			res.json(err);
		});
});
//GET ONE DRINK BY DRINK ID
router.get("/one/:id", (req, res) => {
	Drink.findOne({ _id: req.params.id })
		.then((db) => {
			res.json(db);
		})
		.catch((err) => {
			res.json(err);
		});
});
// UPDATE NOTES FOR ONE DRINK AT DRINK ID
router.put("/update/notes/:id", (req, res) => {
	let id = {
		_id: req.params.id,
	};
	Drink.updateOne(
		{ _id: id },
		{ $set: { notes: req.body.notes } },
		(err, result) => {
			if (err) {
				throw err;
			}
			res.send("notes updated sucessfully");
		}
	);
});
//UPDATE RATING FOR ONE DRINK AT DRINK ID
router.put("/update/ratings/:id", (req, res) => {
	let id = {
		_id: req.params.id,
	};
	Drink.updateOne(
		{ _id: id },
		{ $set: { rating: req.body.rating } },
		(err, result) => {
			if (err) {
				throw err;
			}
			res.send("rating updated sucessfully");
		}
	);
});
//DELETE DRINK AT DRINK ID
router.delete("/delete/:id", (req, res) => {
	Drink.findByIdAndRemove({_id:req.params.id}, (err, result) => {
		if (err) {
			throw err;
		}
		res.send("user deleted sucessfully");
	});
});

module.exports = router;
