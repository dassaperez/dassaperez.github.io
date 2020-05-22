const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}
//The following is for date display in footer
let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let d = new Date();
let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + ", " + monthname + " " + d.getDate() +", " + year;

document.getElementById("lastupdated").textContent = fulldate;
console.log(fulldate);

document.getElementById("year").textContent = year;

// let date = new Date(document.lastModified);
// let time = date.toLocaleString('en-US');

// document.getElementById("updating").textContent = time;