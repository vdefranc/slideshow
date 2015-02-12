var CHESLIDESHOW = {
	currentSlide: 0,
	slideSelector: document.getElementsByClassName('che-slideshow-slide'),
	indicatorSelector: document.getElementsByClassName('slideshow-indicator'),
	nextSlide: function () {
		var nextSlide = this.slideSelector[this.currentSlide + 1] === undefined ?
			0 :  this.currentSlide + 1;

		this.slideSelector[this.currentSlide].classList.add("inactive");
		this.indicatorSelector[this.currentSlide].classList.add("inactive-indicator");
	
		this.slideSelector[nextSlide].classList.remove("inactive");
		this.indicatorSelector[nextSlide].classList.remove("inactive-indicator");

		this.currentSlide = nextSlide;
	},
	prevSlide: function () {

		var prevSlide = this.slideSelector[this.currentSlide - 1] === undefined ?
			this.slideSelector.length - 1 :  this.currentSlide - 1;

		this.slideSelector[this.currentSlide].classList.add("inactive");
		this.indicatorSelector[this.currentSlide].classList.add("inactive-indicator");
	
		this.slideSelector[prevSlide].classList.remove("inactive");
		this.indicatorSelector[prevSlide].classList.remove("inactive-indicator");

		this.currentSlide = prevSlide;
	},
	selectSlide: function (slide) {
		this.currentSlide = slide;
	}
};