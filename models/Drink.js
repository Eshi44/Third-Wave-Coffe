const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
	method: { type: String },
	size: { type: String },
	strength: { type: String },
	roast: { type: String },
	rating: { type: Number },
	favorite: { type: Boolean, default: false },
	notes: { type: String },
	date: { type: Date, default: Date.now },
});

const Drink = mongoose.model("Drink", DrinksSchema);

module.exports = Drink;
