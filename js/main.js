//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

//Portfolio section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
	serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
	learnmoreBtns.addEventListener("click", () => {
		modal(i);
	});
});

modalCloseBtns.forEach((modalCloseBtns) => {
	modalCloseBtns.addEventListener("click", () => {
		serviceModals.forEach((modalView) => {
			modalView.classList.remove("active");
		});
	});
});

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
