//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

//Services section - Modal
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

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
	portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
	imgCard.addEventListener("click", () => {
		portfolioModal(i);
	});
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
	portfolioCloseBtn.addEventListener("click", () => {
		portfolioModals.forEach((portfolioModalView) => {
			portfolioModalView.classList.remove("active");
		});
	});
});

//Testimonials - Swiper
var swiper = new Swiper(".testimonial-swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
