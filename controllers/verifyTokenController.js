const jwt = require("jsonwebtoken");

//MIDDLEWARE FUNCTION TO ADD TO ANY ROUTE THAT WILL BE PRIVATE
module.exports = function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access Denied");

	try {
		// ONCE VERIFIED - GIVE BACK _ID
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.userExists = verified;
		next();
	} catch (err) {
		res.status(400).send("Invalid token");
	}
};
