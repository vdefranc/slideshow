var CHESLIDESHOW = (function () {
	var currentSlideIndex = 0,
		running = false,
	 	slideSelector = document.getElementsByClassName('che-slideshow-slide'),
		indicatorSelector = document.getElementsByClassName('slideshow-indicator'),
		currentSlide,
		mode,
		newSlide;

	function animateSlides (newMode) {
		if (running) {
			return false;
		}
		running = true;

		setTargets(newMode);

		indicatorSelector[currentSlideIndex].classList.add('inactive-indicator');
		indicatorSelector[newSlideIndex].classList.remove('inactive-indicator');

		newSlide.style.left = mode === 'prev' ? '-100%' : '100%';
		currentSlide.style.left = '0%';

		newSlide.classList.remove("inactive");
	
		animate(newSlide);
		animate(currentSlide);
	}

	function animate (slide) {
		var i = 0;

		var animationInt = setInterval(function(){
			slide.style.left = mode === 'prev' ? ( parseInt(slide.style.left) + 1 ) + "%"
												: ( parseInt(slide.style.left) - 1 ) + "%";
			i++;

			if(i >= 100) {
				stopAnimation();
			}
		},10);

		function stopAnimation () {
			currentSlide.classList.add('inactive');
			newSlide.style.left = '0%';
			clearInterval(animationInt);
			currentSlideIndex = newSlideIndex;	
			running = false;
		}
	}

	function setTargets(newMode) {
		mode = newMode;

		if (mode === "prev") {
			newSlideIndex = slideSelector[currentSlideIndex - 1] === undefined ? 3 :  currentSlideIndex - 1;
		} else {
			newSlideIndex = slideSelector[currentSlideIndex + 1] === undefined ? 0 :  currentSlideIndex + 1;
		}

		currentSlide = slideSelector[currentSlideIndex];
		newSlide = slideSelector[newSlideIndex];
	}

	window.onload = setContainerSize;
	window.onresize = setContainerSize;

	function setContainerSize() {
		var container = document.getElementsByClassName('che-slideshow')[0];
		container.style.height = getComputedStyle(slideSelector[currentSlideIndex]).height;
	}

	return {
		nextSlide: function () {
			animateSlides('next');
		},
		prevSlide: function () {
			animateSlides('prev');
		}
	};
})();