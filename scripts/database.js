const database = {
	fish: [],
	tips: [],
	locations: [],
};

function makeFish(image, name, species, size, location, ...food) {
	const fish = {
		image: image,
		name: name,
		species: species,
		size: size,
		location: location,
		food: food,
	};
	database.fish.push(fish);
}
function makeTip(...tip) {
	database.tips.push(...tip);
}

function makeLocation(quote, image, city, country) {
	const location = {
		quote: quote,
		image: image,
		city: city,
		country: country,
	};
	database.locations.push(location);
}

makeLocation(
	"Visit the Sepilok rehabilitation center to see baby organgutans.",
	"https://upload.wikimedia.org/wikipedia/commons/f/fc/MountKinabalu_from_CheSuiKhorPagodaKK-01.jpg",
	"Borneo",
	"Southeast Asia"
);

makeLocation(
	"You can swim with sea turtles in Mancora along the northern coast.",
	"https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
	"Peru",
	"South America"
);

makeLocation(
	"Visit the Warkesi Bird Watching Area in Waisai but make sure you bring your own binoculars and camera.",
	"https://upload.wikimedia.org/wikipedia/commons/3/33/Pegunungan_Arfak_from_the_Pond_of_Rendani.jpg",
	"West Papua",
	"Indonesia"
);

makeLocation(
	"This is one of the most prolific multi-species fisheries in the world!",
	"https://upload.wikimedia.org/wikipedia/commons/c/cd/Rio_Xingu%2C_Vit%C3%B3ria_do_Xingu_-_Par%C3%A1.jpg",
	"Xingu River",
	"Brazil"
);

makeLocation(
	"Try a safari boat cruise along the Nsumbu National Park.",
	"https://upload.wikimedia.org/wikipedia/commons/3/34/Clear_lake_Kagongo_Ward.jpg",
	"Lake Tanganyika",
	"Tanzania"
);

makeTip(
	"Condition tap water before adding to your tank",
	"Let your tank cycle before adding fish",
	"Do not overstock your tank",
	"Make sure your tank isn't too small",
	"Temperature acclimate your fish",
	"Wash your filter with aquarium water instead of tap water",
	"Use live plants that require no CO2 to start",
	"Do regular water changes, so your water parameters stay perfect",
	"Wash your filter once a month",
	"Feed your fish before you do a water change"
);
makeFish(
	"https://www.tropicalfishsite.com/wp-content/uploads/2014/01/petrochromis-red-bulu-point-1.jpg",
	"Diva",
	"Red Bulu Point Petrochromis",
	9,
	"Lake Tanganyika",
	"High quality veggie flake"
);
makeFish(
	"https://upload.wikimedia.org/wikipedia/commons/a/aa/Hypancistrus_Zebra_Pleco_Juvenile.jpg",
	"Pond, James Pond",
	"Zebra Pleco",
	2,
	"Xingu River",
	"brine shrimp",
	"bloodworms"
);
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
	5,
	"West Papua",
	"brine shrimp"
);

makeFish(
	"https://upload.wikimedia.org/wikipedia/commons/0/0f/Chromobotia_macracanthus.jpg",
	"Pierrot",
	"Clown Loach",
	6,
	"Borneo",
	"bloodworms",
	"blackworms"
);

export const getFish = () => {
	return database.fish.map((copyOfSingleFishObject) => ({
		...copyOfSingleFishObject,
	}));
};

export const getTips = () => {
	return [...database.tips];
};

export const getLocations = () => {
	return database.locations.map((copyOfSingleLocation) => ({
		...copyOfSingleLocation,
	}));
};

console.log(database.fish);
console.log(database.locations);
