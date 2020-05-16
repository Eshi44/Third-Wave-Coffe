const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
	method: { type: String },
	size: { type: String },
	strength: { type: String },
	roast: { type: String },
	rating: { type: Number, default: 0 },
	favorite: { type: Boolean, default: false },
	notes: { type: String, default: "" },
	date: { type: Date, default: Date.now },
});

const Drink = mongoose.model("Drink", DrinksSchema);

module.exports = Drink;
