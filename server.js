require("dotenv").config();
const express = require("express");
const path = require("path");
const AuthController = require("./controllers/authController");
const PostRoute = require("./controllers/posts");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});


//routes
app.use("/api/user", AuthController);
app.use("/api/posts", PostRoute);

// mongoose connections
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coffeedb", {useNewUrlParser: true, useUnifiedTopology: true})

 if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
// port
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});