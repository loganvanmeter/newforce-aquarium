import { getLocations } from "../database.js";

const locations = getLocations();
export const locationList = () => {
	let htmlString =
		'<article class="locations"><div class="header-wrapper"><h2 class="section-header" id="location-list-header">Visited Locations</h2></div><div class="locationList">';

	for (const location of locations) {
		htmlString += `<section class="location-card">
        <div><img class="location-image image-card" src="${
					location.image
				}" /></div>
                <div class="text-wrapper-location">
                <div class="location-quote"><h3>Martin say's...<h3><blockquote>${
									location.quote
								}</blockquote></div>
       
       <div class="location-row">
        <div class="location-name">${location.city.toUpperCase()}</div>
        <div class="location-region">${location.country}
        </div></div>
        </div>
        </section>`;
	}
	htmlString += `</div></article>`;
	return htmlString;
};
