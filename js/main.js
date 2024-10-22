const burgerIcon = document.getElementById("burger");
const navbarList = document.getElementById("navbarList");
let isMenuExpanded = false;

burgerIcon.addEventListener("click", function () {
	if (isMenuExpanded) {
		navbarList.classList.remove("expanded");
		burgerIcon.classList.remove("active");
		isMenuExpanded = false;
	} else {
		navbarList.classList.add("expanded");
		burgerIcon.classList.add("active");
		isMenuExpanded = true;
	}
});

window.addEventListener("resize", function () {
	if (window.innerWidth > 768) {
		navbarList.classList.remove("expanded");
		burgerIcon.classList.remove("active");
		isMenuExpanded = true;
	}
});
