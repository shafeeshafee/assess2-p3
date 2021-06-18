const db = require("../db");
const LambDish = require("../models/lamb");
const Country = require("../models/country");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
	const firstCountry = await new Country({
		name: "Yemen",
		country_flag: "https://cdn.britannica.com/85/5785-004-B65441FA/Flag-Yemen.jpg",
	});
	firstCountry.save();

	const secondCountry = await new Country({
		name: "Bangladesh",
		country_flag: "https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg",
	});
	secondCountry.save();

	const thirdCountry = await new Country({
		name: "Pakistan",
		country_flag: "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
	});
	thirdCountry.save();

	const lambDishes = [
		{
			name_of_dish: "Lamb Haneeth",
			home_country: firstCountry._id,
			ingredients: "Lamb, spices, herbs, rice.",
			img: "https://everylittlecrumb.com/wp-content/uploads/lambhaneeth-10-683x1024.jpg",
		},
		{
			name_of_dish: "Bengal Lamb",
			home_country: secondCountry._id,
			ingredients: "Lamb, turmeric, onions, garlic, ghee",
			img: "https://gbc-cdn-public-media.azureedge.net/img81389.520x347.jpg",
		},
		{
			name_of_dish: "Karachi Lamb Biriyani",
			home_country: thirdCountry._id,
			ingredients: "Lamb, basmati rice, jasmine rice, caradomom, cinnamon, ghee, rosewater",
			img: "https://fatimacooks.net/wp-content/uploads/2019/06/IMG_0338-scaled.jpg",
		},
	];

	await LambDish.insertMany(lambDishes);

	console.log("The check is $500 for all these lamb dishes sir!");
};

const run = async () => {
	await main();
	db.close();
};

run();
