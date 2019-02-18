class SliderOnMobile {
    constructor() {
        this.amountOfSlides = 3;
        this.events();
    }

    events() {
        let sliderOnMobile = document.querySelector('.sliderOnMobile');
        let slides = Array.from(document.querySelectorAll('.slideOnMobile'));
        let slider;
        let sliderContainer;
        let distanceFromStart = 0;
        let slideGapInProcent;
        let distanceBetweenSlides;
        let maxDistanceFromStart;
        let minDistanceFromStart;
        let amountOfSlides = this.amountOfSlides;
        function locateSlides() {
            let slideWidthInTheString = (window.getComputedStyle(slides[0])).getPropertyValue('max-width');
            console.log(slideWidthInTheString);
            let slideWidthInProcent = +(slideWidthInTheString.match(/\d/g).join(''));
            slideGapInProcent = Math.round(((100 - (slideWidthInProcent * amountOfSlides)) / (amountOfSlides - 1)) * 100 / slideWidthInProcent);
            distanceBetweenSlides = (slideGapInProcent + 100);
            maxDistanceFromStart = (slideGapInProcent + 100) * (slides.length - 1);
            minDistanceFromStart = -(slideGapInProcent + 100);
            
            for(let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            distanceFromStart = (slideGapInProcent + 100) * i;
            slide.style.transform = `translateX(${distanceFromStart}%)`;
            }
        };
        
        function checkSlider() {
            if(window.innerWidth > 1200 && !slider) {
                slider = document.createElement('div');
                slider.classList.add('slider');
                sliderContainer = document.createElement('div');
                sliderContainer.classList.add('slider-container');
                slides.forEach(function (slide) {
                    slide.classList.remove('slideOnMobile');
                    slide.classList.add('slide');
                    sliderContainer.appendChild(slide);
                });
                slider.appendChild(sliderContainer);
                sliderOnMobile.appendChild(slider);
                
            }
            locateSlides();
        }

        function debaunceOnResize(func) {
            let timer;
            return function (event) {
                clearTimeout(timer);
                timer = setTimeout(func, 300, event);
            }
        }

        window.addEventListener('resize', debaunceOnResize(checkSlider));
    }
}

export default SliderOnMobile;