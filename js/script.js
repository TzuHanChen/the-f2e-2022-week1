// header
let signinMobile = document.getElementById("signin-mobile");
let openNav = document.getElementById("open-nav");
openNav.addEventListener("click", openMobileNav);
let closeNav = document.getElementById("close-nav");
closeNav.addEventListener("click", closeMobileNav);
let nav = document.getElementById("nav");

function openMobileNav() {
	signinMobile.style.display = "none";
	openNav.style.display = "none";
	closeNav.style.display = "block";
	nav.style.display = "block";
}

function closeMobileNav() {
	signinMobile.style.display = "block";
	openNav.style.display = "block";
	closeNav.style.display = "none";
	nav.style.display = "none";
}