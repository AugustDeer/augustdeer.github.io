import intersect from "@alpinejs/intersect";
import Alpine from "alpinejs";

Alpine.plugin(intersect);

window.Alpine = Alpine;

const MONTHS = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const COUNTRIES = [
  "Hong\xa0Kong",
  "Myanmar",
  "Thailand",
  "Brazil",
  "India",
  "Persia",
  "Japan",
  "Spain",
  "Britain",
  "Pakistan",
  "Canada",
];

Alpine.data("SlotMachineGlobal", () => ({
  months: MONTHS,
  countries: COUNTRIES,
}));
Alpine.start();
