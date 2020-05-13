require("dotenv").config();
const express = require("express");
const path = require("path");
const UserController = require("./controllers/userController");
const AuthController = require("./controllers/authController");
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

//dummy data
// const users = [
//   {
//     _id: "1",
//     username:"Dale Cooper",
//     password: "password"
//   },
//   {
//     _id: "2",
//     username:"GodFather",
//     password: "password"
//   },
//   {
//     _id: "1",
//     username:"Napolean",
//     password: "password"
//   }
// ]

//post route for user authentication
//if user exists in my db
// app.post("/api/users", (req,res) => {
 
//   const {username, password} = req.body;
  // db.User.findOne({username:email})
//   const foundUserArray=users.filter(user => user.username === username);
//   console.log(foundUserArray);
//   if(foundUserArray.length > 0) {
//     const userToAuth = foundUserArray[0];
//     if(userToAuth.password ===password) {
//       res.json({
//         success: true,
//         message: "We found you!",
//         // convert data to JWT for future authentication
//         data: userToAuth
//       });
//       } else{
//         res.status(403);
//         res.json({
//   success: false,
//    message: "Invalid username or password",
//    data:null,
//         });
//     }
//     res.json(foundUserArray[0]);
//   }else {
//     res.status(403);
//     res.json({
//       success: false,
//       message: "Invalid username or password",
//       data:null,
//     });
//   }
// });

app.use("/api/user", UserController);
app.use("/api/auth", AuthController);

// mongoose connections
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coffeedb", { useNewUrlParser: true });

app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
// port
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});