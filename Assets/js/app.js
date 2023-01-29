const body = document.body;
const navCon = document.querySelector(".nav-btn-con");
const navBtn = document.querySelector(".nav-btn");
const theme = document.querySelector(".theme-toggle-con");
const lightTheme = document.querySelector(".sun");
const darkTheme = document.querySelector(".moon");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-link");

let selectedTheme = localStorage.getItem("themeSelection");

if (selectedTheme) {
	body.classList.add("dark");
	lightTheme.style.zIndex = "10";
}

navItem.forEach((i) => {
	i.addEventListener("click", () => {
		navBtn.classList.toggle("nav-btn-active");
		navMenu.classList.toggle("nav-menu-active");

		body.classList.remove("no-scroll")
	});
});

//  OPEN NAV MENU FOR MOBILE DISPLAY

navCon.addEventListener("click", () => {
	navBtn.classList.toggle("nav-btn-active");
	navMenu.classList.toggle("nav-menu-active");

	body.classList.toggle("no-scroll")

});


// SCROLL LOCK 

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("nv")) {
		navMenu.classList.remove("nav-menu-active");
			navBtn.classList.remove("nav-btn-active");

		body.classList.remove("no-scroll");

	}
});

// THEME TOGGLE
function themeChange() {
	let darkTheme = body.classList.contains(selectedTheme);
	if (darkTheme) {
		body.classList.remove("dark");
		localStorage.removeItem("themeSelection");
		lightTheme.style.zIndex = "-10";
	} else {
		selectedTheme = "dark";
		body.classList.add(selectedTheme);
		lightTheme.style.zIndex = "10";
		localStorage.setItem("themeSelection", "dark");
	}
}

theme.addEventListener("click", themeChange);
