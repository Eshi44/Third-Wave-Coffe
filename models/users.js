const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
	drinks: [{ type: Schema.Types.ObjectId, ref: "Drink" }],
});

Schema.plugin(mongooseUniqueValidator);

const User = mongoose.model("User", UserSchema);

module.exports = User;
