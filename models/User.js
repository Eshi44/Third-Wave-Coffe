const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true, trim: true, min: 6, max: 20 },
	password: { type: String, trim: true, required: true, min: 6, max: 1000 },
	date: { type: Date, default: Date.now },
	drinks: [{ type: Schema.Types.ObjectId, ref: "Drink" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
