const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {registerValidation, loginValidation} = require("../validation");
const bcrypt = require("bcryptjs");


//REGISTER/SIGNUP
router.post("/register", async (req, res) => {

//VALIDATE DATA BEFORE WE CREATE USER
const {error} = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

// CHECK IF USER IS IN DATABASE
const userExists = await User.findOne({username: req.body.username});
if (userExists) return res.status(400).send("User already exists");


//HASH THE PASSWORD
// generate salt
const salt = await bcrypt.genSalt(10);
// hash pasword with salt
const hashedPassword = await bcrypt.hash(req.body.password, salt); 

// CREATE A NEW USER
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  })

    try {
      const savedUser = await user.save()
      res.send({user: user._id});
    }catch(err) {
      res.status(400).send(err);
    }

});

// LOGIN/SIGNIN

router.post("/login", async (req, res) => {

//VALIDATE DATA BEFORE WE CREATE USER
const {error} = loginValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

// CHECK IF USER EXISTS
const userExists = await User.findOne({username: req.body.username});
if (!userExists) return res.status(400).send("Invalid username");

// CHECK IF PASSWORD IS CORRECT
const validPass = await bcrypt.compare(req.body.password, userExists.password);
if(!validPass) return res.status(400).send("Invalid password");


//CREATE AND ASSIGN JSON WEB TOKEN
const token = jwt.sign({_id: userExists._id}, process.env.TOKEN_SECRET);
res.header("auth-token", token).send(token);


//IF SUCCESSFUL
res.send("Logged in!");

});


module.exports = router;



