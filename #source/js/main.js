// Меню бургер
const menuBody = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const menuIcon = document.querySelector('.menu-header__burger');
document.addEventListener('click', menu);

function menu(event){
	if (event.target.closest('.menu-header__burger')) {
		menuBody.classList.toggle('active');
		menuIcon.classList.toggle('active');
		document.body.classList.toggle('lock');
		if (window.innerWidth > 991) {
			overlay.classList.toggle('active');
		}
	}
	if (!event.target.closest('.header__menu')) {
		menuBody.classList.remove('active');
		menuIcon.classList.remove('active');
		document.body.classList.remove('lock');
		if (window.innerWidth > 991) {
			overlay.classList.remove('active');
		}
	}
}



// RELAX SLIDER
const relaxSlider = document.querySelector('.relax-block__body');
relaxSwiper = new Swiper(relaxSlider, {
	observer: true,
	observeParents: true,
	observeChildren: true,
	autoHeight: true,
	effect: 'slide',
	speed: 800,
	loop: false,
	watchOverflow: true,
	slideClass: "relax-block__item",
	wrapperClass: "relax-block__wrapper",
		// Arrows
		navigation: {
			nextEl: '.relax-block__body .slider-arrow_next',
			prevEl: '.relax-block__body .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			410: {
				slidesPerView: 'auto',
				spaceBetween: 25,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

const newsSlider = document.querySelector('.news__body');
newsSwiper = new Swiper(newsSlider, {
	observer: true,
	observeParents: true,
	observeChildren: true,
	autoHeight: true,
	effect: 'slide',
	speed: 800,
	loop: false,
	watchOverflow: true,
	centeredSlides: false,
	slideClass: "news__column",
	wrapperClass: "news__wrapper",
		// Arrows
		navigation: {
			nextEl: '.news__body .slider-arrow_next',
			prevEl: '.news__body .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 25,
			},
			410: {
				slidesPerView: 'auto',
				spaceBetween: 25,
			},
			680: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

const advantagesSlider = document.querySelector('.advantages__slider');
advantagesSwiper = new Swiper(advantagesSlider, {
	observer: true,
	observeParents: true,
	observeChildren: true,
	observeSlideChildren: true,
	speed: 800,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	loop: false,
	watchOverflow: true,
	slideClass: 'advantages__item',
	wrapperClass: 'advantages-slider__wrapper',
		// Arrows
		navigation: {
			nextEl: '.advantages__controls .slider-arrow_next',
			prevEl: '.advantages__controls .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 20,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
			},
			991: {
				slidesPerView: 1,
				spaceBetween: 20,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
			},
		},
	});


// GALLERY SLIDER
const gallerySlider = document.querySelector('.video-block__body');
let mobileSwiper;
function mobSwiper() {
	if (window.innerWidth <= 991 && gallerySlider.dataset.mobile == 'false'){
		mobileSwiper = new Swiper(gallerySlider, {
			slidesPerGroup: 1,
			loop: false,
			spaceBetween: 20,
			slideClass: 'video-block__item',
			wrapperClass: 'video-block__wrapper',
			initialSlide: 0,
			breakpoints: {
				300: {
					slidesPerView: 1.2,
				},
				410: {
					slidesPerView: 'auto',
				},
				580: {
					slidesPerView: 2.2,
				},
			},
		});
		gallerySlider.dataset.mobile = 'true';
	};
	if (window.innerWidth > 991) {
		gallerySlider.dataset.mobile = 'false';
	}
};
mobSwiper();
window.addEventListener('resize', () => {
	mobSwiper();
});

const navLink = document.querySelectorAll('.menu__link')
function linkAction(){
    const navMenu = document.getElementById('menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('active');
    document.body.classList.remove('lock');
    menuIcon.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));