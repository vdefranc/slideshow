var CHESLIDESHOW = (function () {
	var currentSlide = 0;
	var running = false;
	var slideSelector = document.getElementsByClassName('che-slideshow-slide');
	var indicatorSelector = document.getElementsByClassName('slideshow-indicator');

	return {
		nextSlide: function () {
			if (running) {
				return false;
			}
			running = true;

			var nextSlide = slideSelector[currentSlide + 1] === undefined ?
				0 :  currentSlide + 1;

			var currentSlideSelector = slideSelector[currentSlide];
			var nextSlideSelector = slideSelector[nextSlide];

			currentSlideSelector.classList.remove("trans-none");

			nextSlideSelector.classList.add("right-position");
			nextSlideSelector.classList.remove("inactive");

			indicatorSelector[currentSlide].classList.add("inactive-indicator");
			indicatorSelector[nextSlide].classList.remove("inactive-indicator");
			
			setTimeout(function() {
				nextSlideSelector.classList.add("activating-from-right");
				currentSlideSelector.classList.add("deactivating-to-left");

				setTimeout(function() {
					currentSlideSelector.classList.add("inactive");
					currentSlideSelector.classList.remove("deactivating-to-left");
					nextSlideSelector.classList.add("trans-none");
					nextSlideSelector.classList.remove("activating-from-right");
					nextSlideSelector.classList.remove("right-position");
					setTimeout(function() {
						currentSlide = nextSlide;
						running = false;
					}, 1);
			    }, 700);
			}, 5);
		},
		prevSlide: function () {
			if (running) {
				return false;
			}
			
			running = true;
			
			var currentSlideSelector = slideSelector[currentSlide];
			
			var prevSlide = slideSelector[currentSlide - 1] === undefined ?
				slideSelector.length - 1 :  currentSlide - 1;
			var prevSlideSelector = slideSelector[prevSlide];
			currentSlideSelector.classList.remove("trans-none");

			prevSlideSelector.classList.add("left-position");
			prevSlideSelector.classList.remove("inactive");

			currentSlideSelector.classList.add("inactive-indicator");
			prevSlideSelector.classList.remove("inactive-indicator");
			
			setTimeout(function() {
				prevSlideSelector.classList.add("activating-from-left");
				currentSlideSelector.classList.add("deactivating-to-right");

				setTimeout(function() {
					currentSlideSelector.classList.add("inactive");
					currentSlideSelector.classList.remove("deactivating-to-right");
					prevSlideSelector.classList.add("trans-none");
					prevSlideSelector.classList.remove("activating-from-left");
					prevSlideSelector.classList.remove("left-position");
					setTimeout(function() {
						currentSlide = prevSlide;
						running = false;			
					}, 1);
			    }, 700);
			}, 1);
		}
	};
})();
