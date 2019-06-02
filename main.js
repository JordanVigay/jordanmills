let lastScrollTop = 10000;
let header;

function onload() {
	header = document.getElementsByTagName("header")[0];
	document.body.classList.remove("preload");
}

document.addEventListener("scroll", e => {

	let scrollTop = document.documentElement.scrollTop || window.pageYOffset;

	if(scrollTop > 0){
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});