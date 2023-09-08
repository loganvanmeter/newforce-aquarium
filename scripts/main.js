import { fishList } from "./fish/fishlist.js";
import { locationList } from "./locations/locations.js";
import { tipList } from "./tips/tips.js";

const fishListContainer = document.querySelector("#fish-list");
const tips = document.querySelector("#tips");
const locations = document.querySelector("#locations");
fishListContainer.innerHTML = fishList();
tips.innerHTML = tipList();
locations.innerHTML = locationList();
