var CHESLIDESHOW = (function () {
	var currentSlideIndex = 0,
		running = false,
	 	slideSelector = document.getElementsByClassName('che-slideshow-slide'),
		indicatorSelector = document.getElementsByClassName('slideshow-indicator'),
		currentSlide,
		newSlide;

	// var next = function () {};
	// var prev = function () {};

	var animateSlides = function (newSlide, currentSlide, fromDirection, newSlideIndex) {
		var notDirection = fromDirection === 'left' ? 'right' : 'left';
		var animate = function(slideParameter) {
			var slide = slideParameter;
			var i = 0;


			var animationInt = setInterval(function(){
				slide.style[fromDirection] = ( parseInt(slide.style[fromDirection]) + 1 ) + "%";
				i++;

				if(i >= 100) {
					stopAnimation();
				}
			},10);

			var stopAnimation = function () {
				currentSlide.classList.add('inactive');
				newSlide.style[fromDirection] = '0%';
				clearInterval(animationInt);
				running = false;
				//currentSlide = newSlide;
				currentSlideIndex = newSlideIndex;
				console.log("currentSlideIndex: " + currentSlideIndex);
				console.log("currentSlide: " + currentSlide);
				console.log("newSlide: " + newSlide);
				
			};

		};



		//RUNS BEFORE ABOVE FUNCTIONS inside animateSlides
		newSlide.style[fromDirection] = '-100%';
		newSlide.classList.remove("inactive");
		currentSlide.style[fromDirection] = '0%';
		
		animate(newSlide);
		animate(currentSlide);

	};

	return {
		nextSlide: function () {
			if (running) {
				return false;
			}
			running = true;

			var newSlideIndex = slideSelector[currentSlideIndex + 1] === undefined ?
				0 :  currentSlideIndex + 1,

				currentSlide = slideSelector[currentSlideIndex],
				newSlide = slideSelector[newSlideIndex];

				indicatorSelector[currentSlideIndex].classList.add('inactive-indicator');
				indicatorSelector[newSlideIndex].classList.remove('inactive-indicator');

				animateSlides(newSlide, currentSlide, 'right', newSlideIndex);
		},
		prevSlide: function () {
			if (running) {
				return false;
			}
			
			running = true;



			var newSlideIndex = slideSelector[currentSlideIndex - 1] === undefined ?
				3 :  currentSlideIndex - 1,

				currentSlide = slideSelector[currentSlideIndex],
				newSlide = slideSelector[newSlideIndex];

				indicatorSelector[currentSlideIndex].classList.add('inactive-indicator');
				indicatorSelector[newSlideIndex].classList.remove('inactive-indicator');

				animateSlides(newSlide, currentSlide, 'left', newSlideIndex);
		}
	};
})();
