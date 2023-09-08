import { getTips } from "../database.js";

export const tipList = () => {
	const allTips = getTips();
	let htmlString =
		'<aside class="tip-list"><section class="tip-card"><h2 class="section-header" id="tips-header">Tips and Tricks</h2><ul id=tip-unordered-list>';

	allTips.forEach((tip) => {
		htmlString += `<li class="tip">${tip}</li>`;
	});
	htmlString += `</ul></section></aside>`;
	return htmlString;
};
