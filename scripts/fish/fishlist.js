import { getFish } from "../database.js";
const fishes = getFish();
let filteredFishes = [];
let holyFish = [];
let soldierFish = [];
let regularFish = [];
export const filterFish = () => {
	fishes.forEach((fish) => {
		if (fish.size % 3 === 0 && fish.size % 5 === 0) {
			holyFish.push(fish);
		} else if (fish.size % 3 === 0) {
			holyFish.push(fish);
		} else if (fish.size % 5 === 0) {
			soldierFish.push(fish);
		} else {
			regularFish.push(fish);
		}
	});
};
filterFish();
filteredFishes = [...holyFish, ...soldierFish, ...regularFish];

export const fishList = () => {
	let htmlString =
		'<article class="fishList"><div class="header-wrapper"><h2 class="section-header" id="fish-list-header">My Fish</h2></div><div class="fish">';

	for (const singleFish of filteredFishes) {
		htmlString += `<div class="fish-card">
        <div><img class="fish-image image-card" src="${
					singleFish.image
				}" /></div>
				<div class="text-wrapper-fish">
        <div class="fish-name"><h3>NAME</h3>${singleFish.name}</div>
        <div class="fish-species"><h3>SPECIES</h3>${singleFish.species}</div>
		<div class="fish-size"><h3>SIZE</h3>${singleFish.size.toString()}in</div>
        <div class="fish-location"><h3>LOCATION</h3>${singleFish.location}</div>
        <div class="fish-diet"><h3>DIET</h3>${
					singleFish.food.join(" and ").charAt(0).toUpperCase() +
					singleFish.food.join(" and ").slice(1)
				}</div>
        </div>
		</div>`;
	}
	htmlString += `</div></article>`;
	return htmlString;
};

filteredFishes.forEach((fish) => {
	console.log(fish.size);
});
console.log(fishList());
