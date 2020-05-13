require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

//signup

router.post("/", (req, res) => {
	const username = req.body.username ? req.body.username.trim() : "";
	const password = req.body.password ? req.body.password.trim() : "";
	if (username && password) {
		db.User.create({ username, password })
			.then(async (newUser) => {
				const token = await jwt.sign(
					{
						username: newUser.username,
						id: newUser.id,
						exp: Math.floor(Date.now() / 1000) + 60 * 60,
					},
					"secret"
				);
				console.log(token);
				await res.json({
					success: true,
					data: token,
				});
			})
			.catch((err) => {
				console.log(err);
				res.status(500);
				res.json({
					success: false,
					message: "Failed to create new user.",
				});
			});
	} else {
		res.status(500).json({
			success: false,
			message: "Please enter a valid username and password.",
		});
	}
});

module.exports = router;
