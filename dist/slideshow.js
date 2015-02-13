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

			slideSelector[currentSlide].classList.remove("trans-none");

			slideSelector[nextSlide].classList.add("right-position");
			slideSelector[nextSlide].classList.remove("inactive");

			indicatorSelector[currentSlide].classList.add("inactive-indicator");
			indicatorSelector[nextSlide].classList.remove("inactive-indicator");
			
			setTimeout(function() {
				slideSelector[nextSlide].classList.add("activating-from-right");
				slideSelector[currentSlide].classList.add("deactivating-to-left");

				setTimeout(function() {
					slideSelector[currentSlide].classList.add("inactive");
					slideSelector[currentSlide].classList.remove("deactivating-to-left");
					slideSelector[nextSlide].classList.add("trans-none");
					slideSelector[nextSlide].classList.remove("activating-from-right");
					slideSelector[nextSlide].classList.remove("right-position");
					setTimeout(function() {
						currentSlide = nextSlide;
						running = false;
					}, 1);
			    }, 700);
			}, 1);
		},
		prevSlide: function () {
			if (running) {
				return false;
			}
			
			running = true;
			
			var prevSlide = slideSelector[currentSlide - 1] === undefined ?
				slideSelector.length - 1 :  currentSlide - 1;

			slideSelector[currentSlide].classList.remove("trans-none");

			slideSelector[prevSlide].classList.add("left-position");
			slideSelector[prevSlide].classList.remove("inactive");

			indicatorSelector[currentSlide].classList.add("inactive-indicator");
			indicatorSelector[prevSlide].classList.remove("inactive-indicator");
			
			setTimeout(function() {
				slideSelector[prevSlide].classList.add("activating-from-left");
				slideSelector[currentSlide].classList.add("deactivating-to-right");

				setTimeout(function() {
					slideSelector[currentSlide].classList.add("inactive");
					slideSelector[currentSlide].classList.remove("deactivating-to-right");
					slideSelector[prevSlide].classList.add("trans-none");
					slideSelector[prevSlide].classList.remove("activating-from-left");
					slideSelector[prevSlide].classList.remove("left-position");
					setTimeout(function() {
						currentSlide = prevSlide;
						running = false;			
					}, 1);
			    }, 700);
			}, 1);
		}
	};
})();
