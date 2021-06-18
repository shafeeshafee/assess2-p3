const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeOfLambDish = new Schema(
	{
		name_of_dish: { type: String, required: true },
		origin: { type: Schema.Types.ObjectId, ref: "homeCountries" },
		ingredients: { type: String, required: true },
		img: { type: String, required: true },
	},
	{ timestamps: true }
);
module.exports = mongoose.model("lambDishes", typeOfLambDish);
