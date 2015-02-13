var CHESLIDESHOW = (function () {
	var currentSlide = 0;
	var slideSelector = document.getElementsByClassName('che-slideshow-slide');
	var indicatorSelector = document.getElementsByClassName('slideshow-indicator');

	return {
		nextSlide: function () {
			var nextSlide = slideSelector[currentSlide + 1] === undefined ?
				0 :  currentSlide + 1;

			slideSelector[currentSlide].classList.remove("trans-none");

			slideSelector[nextSlide].classList.add("left-position");
			slideSelector[nextSlide].classList.remove("inactive");
			
			setTimeout(function() {
				slideSelector[nextSlide].classList.add("activating-from-left");
				slideSelector[currentSlide].classList.add("deactivating-to-right");

				setTimeout(function() {
					slideSelector[currentSlide].classList.add("inactive");
					//slideSelector[currentSlide].classList.remove("deactivating-to-right");
					slideSelector[nextSlide].classList.add("trans-none");
					slideSelector[nextSlide].classList.remove("activating-from-left");
					slideSelector[nextSlide].classList.remove("left-position");
					setTimeout(function() {
						currentSlide = nextSlide;
					}, 1);
			    }, 1000);


			}, 1);

			//slideSelector[currentSlide].classList.add("inactive");
			//slideSelector[nextSlide].classList.remove("inactive");
		


			//slideSelector[currentSlide].classList.add("inactive");
			//indicatorSelector[currentSlide].classList.add("inactive-indicator");
		
			//slideSelector[nextSlide].classList.remove("inactive");
			//indicatorSelector[nextSlide].classList.remove("inactive-indicator");

			//currentSlide = nextSlide;

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
