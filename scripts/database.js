const database = {
	fish: [],
};

function makeFish(image, name, type, size, location, ...food) {
	const fish = {
		image: image,
		name: name,
		type: type,
		size: size,
		location: location,
		food: food,
	};

	database.fish.push(fish);
}

makeFish(
	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Neonsalmler_Paracheirodon_innesi.jpg/1920px-Neonsalmler_Paracheirodon_innesi.jpg",
	"Rocket",
	"Neon Tetra",
	1.75,
	"Peru",
	"brine shrimp",
	"fruit"
);

makeFish(
	"https://upload.wikimedia.org/wikipedia/commons/1/1b/Sunny1.jpg",
	"Amber",
	"Boesman's Rainbowfish",
	4,
	"West Papau",
	"brine shrimp"
);

makeFish(
	"https://upload.wikimedia.org/wikipedia/commons/0/0f/Chromobotia_macracanthus.jpg",
	"Pierrot",
	"Clown Loach",
	6.25,
	"Borneo",
	"bloodworms",
	"blackworms"
);

export { database };
