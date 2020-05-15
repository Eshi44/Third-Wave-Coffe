const express = require("express");
const router = express.Router();
const verify = require("./verifyTokenController");

router.get("/", verify, (req, res) => {
	res.send(req.userExists);
});

module.exports = router;
