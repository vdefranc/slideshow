var CHESLIDESHOW = (function () {
	var currentSlide = 0;
	var slideSelector = document.getElementsByClassName('che-slideshow-slide');
	var indicatorSelector = document.getElementsByClassName('slideshow-indicator');

	return {
		nextSlide: function () {
			var nextSlide = slideSelector[currentSlide + 1] === undefined ?
				0 :  currentSlide + 1;

			slideSelector[currentSlide].classList.add("inactive");
			indicatorSelector[currentSlide].classList.add("inactive-indicator");
		
			slideSelector[nextSlide].classList.remove("inactive");
			indicatorSelector[nextSlide].classList.remove("inactive-indicator");

			currentSlide = nextSlide;
		},
		prevSlide: function () {

			var prevSlide = slideSelector[currentSlide - 1] === undefined ?
				slideSelector.length - 1 :  currentSlide - 1;

			slideSelector[currentSlide].classList.add("inactive");
			indicatorSelector[currentSlide].classList.add("inactive-indicator");
		
			slideSelector[prevSlide].classList.remove("inactive");
			indicatorSelector[prevSlide].classList.remove("inactive-indicator");

			currentSlide = prevSlide;
		},
		selectSlide: function (slide) {

			slideSelector[currentSlide].classList.add("inactive");
			indicatorSelector[currentSlide].classList.add("inactive-indicator");
		
			slideSelector[slide].classList.remove("inactive");
			indicatorSelector[slide].classList.remove("inactive-indicator");


			currentSlide = slide;
		}
	};
})();
