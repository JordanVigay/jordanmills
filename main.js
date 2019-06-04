let lastScrollTop = 10000;
let header, spacer;

function onload() {
	header = document.getElementsByTagName("header")[0];
	spacer = document.getElementById("spacer");
	document.body.classList.remove("preload");
	document.body.onscroll = e => {

		let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
	
		if(scrollTop > 0){
			header.classList.add("scrolled");
			// spacer.style.width = "50vw";
		} else {
			header.classList.remove("scrolled");
			// spacer.style.width = "";
		}
	};
	document.body.onscroll()
}