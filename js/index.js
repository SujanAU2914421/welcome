let log = console.log;

let parl = document.querySelector(".parl");
let scrollContainer = document.querySelector(".scrollContainer");
let cont2 = document.querySelector(".cont2");
let links = ["Home", "Gallery", "Location", "More"];
let navLinksContainer = document.querySelector(".navLinksContainer");
let secCont = document.querySelector(".secCont");
let navBar = document.querySelector(".navBar");
let txts = document.querySelectorAll(".txts");

window.onload = () => {
	scrollContainer.addEventListener("scroll", (e) => {
		parallalax(e);
		if (e.target.scrollTop > 0) {
			navBar.style.height = "50px";
			scrollContainer.style.height = `calc(100%-50px)`;
		} else {
			navBar.style.height = "100px";
			scrollContainer.style.height = `calc(100%-100px)`;
		}
	});
	linkProv();
	txtAnimation();
};

function txtAnimation() {
	txts.forEach((e, i) => {
		e.style.transitionDelay = `${i * 0.05}s`;
		e.style.transform = "translateY(-30px)";
	});
	setTimeout(() => {
		txts.forEach((e, i) => {
			e.style.transform = "translateY(0)";
		});
	}, 300);
}

function parallalax(e) {
	parl.style.backgroundPositionY = `${e.target.scrollTop * 0.6}px`;
	if (e.target.scrollTop - 200 > cont2.getBoundingClientRect().y) {
		cont2.style.transform = `scale(${e.target.scrollTop * 0.0001 + 1})`;
	}
	if (secCont.getBoundingClientRect().y < 0) {
		navTrans(1);
	}
	if (
		secCont.getBoundingClientRect().y > secCont.getBoundingClientRect().height
	) {
		navTrans(0);
	}
}

function navTrans(n) {
	if (n == 1) {
		navBar.classList.remove("bg-black");
		navBar.classList.remove("bg-white");
		navBar.classList.add("bg-white");
		navBar.classList.remove("text-white");
	} else {
		navBar.classList.remove("bg-black");
		navBar.classList.add("bg-black");
		navBar.classList.remove("bg-white");
		navBar.classList.remove("text-white");
		navBar.classList.add("text-white");
	}
}

function linkProv() {
	for (let i = 0; i < links.length; i++) {
		navLinksContainer.innerHTML += `<div class="relative h-auto w-auto navLinks cursor-pointer"></div>`;
	}
	let navLinks = document.querySelectorAll(".navLinks");
	let navTexts = [];
	for (let i = 0; i < links.length; i++) {
		for (let j = 0; j < links[i].length; j++) {
			navLinks[
				i
			].innerHTML += `<span class="relative h-auto w-auto navTexts duration-300" style="transition-delay: ${
				j * 0.05
			}s">${links[i][j]}</span>`;
		}
		navTexts[i] = document.querySelectorAll(".navTexts");
	}
	navLinks.forEach((elem, ind) => {
		elem.addEventListener("mouseover", () => {
			hoverAnimation(elem, ind, navTexts[ind]);
		});
	});
}

function hoverAnimation(elem, ind, navTexts) {
	navTexts.forEach((elem2, ind2) => {
		elem2.style.transform = "scale(2)";
	});
}
