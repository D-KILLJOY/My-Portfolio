const body = document.body;
const navCon = document.querySelector(".nav-btn-con");
const navBtn = document.querySelector(".nav-btn");
const theme = document.querySelector(".theme-toggle-con");
const lightTheme = document.querySelector(".sun");
const darkTheme = document.querySelector(".moon");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".logo");

let selectedTheme = localStorage.getItem("themeSelection");
let selectedLogo = localStorage.getItem("logoType");

if (selectedTheme) {
	body.classList.add("dark");
	lightTheme.style.zIndex = "10";
}

if (selectedLogo) {
	logo.setAttribute("src", "./Assets/images/Didia-Uchenna-logo-white.png");
}

navItem.forEach((i) => {
	i.addEventListener("click", () => {
		navBtn.classList.toggle("nav-btn-active");
		navMenu.classList.toggle("nav-menu-active");

		body.classList.remove("no-scroll");
	});
});

//!  OPEN NAV MENU FOR MOBILE DISPLAY

navCon.addEventListener("click", () => {
	navBtn.classList.toggle("nav-btn-active");
	navMenu.classList.toggle("nav-menu-active");

	body.classList.toggle("no-scroll");
});

// ! SCROLL SHADOW
const scrollChecker = document.createElement("div");
const header = document.querySelector(".main-header");

scrollChecker.setAttribute("data-scroll-watcher", "");
header.before(scrollChecker);

const Observer = new IntersectionObserver(
	(entries) => {
		console.log(entries.interc);
		header.classList.toggle("shadow", !entries[0].isIntersecting);
	},
	{ rootMargin: "200px 0px 0px 0px " }
);

Observer.observe(scrollChecker);

// ! SCROLL LOCK ON MOBILE NAV DISPLAY

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("nv")) {
		navMenu.classList.remove("nav-menu-active");
		navBtn.classList.remove("nav-btn-active");

		body.classList.remove("no-scroll");
	}
});

// ! THEME TOGGLE
function themeChange() {
	let darkTheme = body.classList.contains(selectedTheme);
	if (darkTheme) {
		body.classList.remove("dark");
		localStorage.removeItem("themeSelection");
		localStorage.removeItem("logoType");
		lightTheme.style.zIndex = "-10";
		logo.setAttribute("src", "./Assets/images/Didia-Uchenna-logo.png");
	} else {
		selectedTheme = "dark";
		body.classList.add(selectedTheme);
		lightTheme.style.zIndex = "10";
		localStorage.setItem("themeSelection", "dark");
		localStorage.setItem(
			"logoType",
			"./Assets/images/Didia-Uchenna-logo-white.png"
		);
		logo.setAttribute("src", "./Assets/images/Didia-Uchenna-logo-white.png");
	}
}

theme.addEventListener("click", themeChange);

// ! ANIMATION

function revealL() {
	let revealsLeft = document.querySelectorAll(".reveal-left");

	for (let i = 0; i < revealsLeft.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = revealsLeft[i].getBoundingClientRect().top;
		let elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			revealsLeft[i].classList.add("active");
		} else {
			revealsLeft[i].classList.remove("active");
		}
	}
}

function revealR() {
	let revealsRight = document.querySelectorAll(".reveal-right");

	for (let i = 0; i < revealsRight.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = revealsRight[i].getBoundingClientRect().top;
		let elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			revealsRight[i].classList.add("active");
		} else {
			revealsRight[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", revealL);
window.addEventListener("scroll", revealR);
window.addEventListener("load", revealL);
window.addEventListener("load", revealR);

revealR();
revealL();

// ! 720 PX

function revealTwL() {
	let revealsLeft = document.querySelectorAll(".reveal-left-tw");

	for (let i = 0; i < revealsLeft.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = revealsLeft[i].getBoundingClientRect().top;
		let elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			revealsLeft[i].classList.add("active");
		} else {
			revealsLeft[i].classList.remove("active");
		}
	}
}

function revealTwR() {
	let revealsRight = document.querySelectorAll(".reveal-right-tw");

	for (let i = 0; i < revealsRight.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = revealsRight[i].getBoundingClientRect().top;
		let elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			revealsRight[i].classList.add("active");
		} else {
			revealsRight[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", revealTwL);
window.addEventListener("scroll", revealTwR);
window.addEventListener("load", revealTwL);
window.addEventListener("load", revealTwR);

revealTwR();
revealTwL();

// ! 1200 PX

function revealTrL() {
	let revealsLeft = document.querySelectorAll(".reveal-left-tr");

	for (let i = 0; i < revealsLeft.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = revealsLeft[i].getBoundingClientRect().top;
		let elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			revealsLeft[i].classList.add("active");
		} else {
			revealsLeft[i].classList.remove("active");
		}
	}
}

function revealTrR() {
	let revealsRight = document.querySelectorAll(".reveal-right-tr");

	for (let i = 0; i < revealsRight.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = revealsRight[i].getBoundingClientRect().top;
		let elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			revealsRight[i].classList.add("active");
		} else {
			revealsRight[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", revealTrL);
window.addEventListener("scroll", revealTrR);
window.addEventListener("load", revealTrL);
window.addEventListener("load", revealTrR);

revealTrR();
revealTrL();

// * CHANGING ANIMATION

window.addEventListener("scroll", function () {
	const projectTile = document.querySelectorAll(".project-tile");

	if (window.innerWidth > 710) {
		for (let i = 0; i < projectTile.length; i++) {
			if (projectTile[i].classList.contains("reveal-left")) {
				projectTile[i].classList.remove("reveal-left");
			} else if (projectTile[i].classList.contains("reveal-right")) {
				projectTile[i].classList.remove("reveal-right");
			}
		}
	}
	if (window.innerWidth > 1200) {
		for (let i = 0; i < projectTile.length; i++) {
			if (projectTile[i].classList.contains("reveal-left-tw")) {
				projectTile[i].classList.remove("reveal-left-tw");
			} else if (projectTile[i].classList.contains("reveal-right-tw")) {
				projectTile[i].classList.remove("reveal-right-tw");
			}
		}
	}
});

// ! DISPLAY SKILL ATTR

const imageContainer = document.querySelectorAll(".skill-img-con");

imageContainer.forEach((e) => {
	const image = e.querySelector(".skill-img");
	e.setAttribute("desc", image.getAttribute("alt"));
});
