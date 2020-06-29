require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// PORT
const PORT = process.env.PORT || 3001;

const app = express();
//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
		currentPort: PORT,
	});
});

//ROUTES

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/teadb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
} else {
	app.use(express.static("public"));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
// PORT
app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`);
});
