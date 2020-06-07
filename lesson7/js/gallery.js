//lazy loading of images
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      };
    });
  });

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

//hamburger menu button
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

//let fulldate = dayname + ", " + monthname + " " + d.getDate() +", " + year;  (shows day month date year format)
let fulldate = dayname + ", " + d.getDate() + " " + monthname + " " + year;

document.getElementById("lastupdated").textContent = fulldate;
console.log(fulldate);

//to display current year next to copyright (although copyright year should remain the same)
document.getElementById("year").textContent = year;

//to display pancake message on fridays
const banner = document.getElementById("eventMessage");

if (daynames[d.getDay()] == "Friday" || daynames[d.getDay()] == "Saturday") {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

//to control font loading
WebFont.load({
  google: {
    families: [
      'Roboto Slab', 'Open Sans'
    ]
  }
});