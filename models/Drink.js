const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
	user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
	method: { type: String },
	size: { type: String },
	strength: { type: String },
	roast: { type: String },
	rating: { type: Number },
	favorite: { type: Boolean },
	notes: { type: String },
	date: { type: Date, default: Date.now },
});

const Drink = mongoose.model("Drink", DrinksSchema);

module.exports = Drink;
