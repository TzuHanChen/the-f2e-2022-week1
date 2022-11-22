// card0 loading
let percentage = document.getElementById("percentage");
let current = 0, interval = 100, opacity = 1;
let card0 = document.getElementById("card0");

setInterval(() => {
    if (current < 100) {
        percentage.textContent = current.toString() + "%";
		current += Math.ceil(Math.random() * 10);
    }
    else {
		percentage.textContent = "100%";
        clearInterval();
		setTimeout(() => {
			card0.style.display = "none";
		}, 500);
    }
}, interval);

// header
let header = document.getElementById("header");
let signinMobile = document.getElementById("signin-mobile");
let openNav = document.getElementById("open-nav");
openNav.addEventListener("click", openMobileNav);
let closeNav = document.getElementById("close-nav");
closeNav.addEventListener("click", closeMobileNav);
let nav = document.getElementById("nav");
let navBackdrop = document.getElementById("nav-backdrop");

function openMobileNav() {
	header.style.backgroundColor = "#EFDFD2";
	signinMobile.style.display = "none";
	openNav.style.display = "none";
	closeNav.style.display = "block";
	nav.style.backgroundColor = "#EFDFD2";
	nav.style.display = "flex";
	nav.style.flexDirection = "column";
	navBackdrop.style.display = "block";
}

function closeMobileNav() {
	header.style.backgroundColor = "initial";
	signinMobile.style.display = "block";
	openNav.style.display = "block";
	closeNav.style.display = "none";
	nav.style.backgroundColor = "initial";
	nav.style.display = "none";
	nav.style.flexDirection = "row";
	navBackdrop.style.display = "none";
}