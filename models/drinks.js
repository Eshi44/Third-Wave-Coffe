const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinksSchema = new Schema({
  user_id: { type: String, required: true },
  method: { type: String },
  size: { type: String },
  strength: { type: String },
  roast: { type: String },
  rating: { type: Integer },
  favorite: { type: Boolean},
  notes: { type: String },
  date: { type: Date, default: Date.now }
  
});

const Drink = mongoose.model("Drink", drinksSchema);

module.exports = Drink;