class Generator {
    constructor() {
        this.events();
    }

    events() {
        const buttons = document.querySelectorAll('[data-direction]');
        const slides = Array.from(document.querySelectorAll('.slide'));
        const sliderContainer = document.querySelector('.slider__container');
        let distanceFromStart = 0;
        let slideGapInProcent = 13;
        let slideWidthInProcent = 30;
        let distanceBetweenSlides = ((slideWidthInProcent - slideGapInProcent) + 100);
        let maxDistanceFromStart = ((slideWidthInProcent - slideGapInProcent) + 100) * (slides.length - 1);
        let minDistanceFromStart = -((slideWidthInProcent - slideGapInProcent) + 100);
        (function locateSlides() {
            for(let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            distanceFromStart = ((slideWidthInProcent - slideGapInProcent) + 100) * i;
            slide.style.maxWidth = `${slideWidthInProcent}%`;
            slide.style.transform = `translateX(${distanceFromStart}%)`;
            }
        })();

        function debounce(func, wait = 300, immediate = true) {
            let timeout;
            return function () {
                let context = this,
                    args = arguments;
                
                let later = function () {
                    timeout = null;
                    if(!immediate) func.apply(context, args);
                };
                let callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if(callNow) func.apply(context, args);
            };
        };

        function moveSlides() {
            if(this.dataset.direction == 'prev') {
                slides.unshift(slides.pop());
                slides.map(slide => {
                    let locationFromStart = slide.style.transform;
                    sliderContainer.appendChild(slide);

                    const locationFromStartInDigit = +(locationFromStart.match(/[\d]/g).join(''));
                    let locationOnClickFromStart = locationFromStartInDigit + distanceBetweenSlides;
                    slide.style.opacity = 1;
                    if(locationOnClickFromStart > maxDistanceFromStart) {
                        locationOnClickFromStart = minDistanceFromStart;
                        slide.style.opacity = 0;
                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;
                    }
                    setTimeout(() => {
                        sliderContainer.firstElementChild.style.transform = `translateX(0%)`;
                        sliderContainer.firstElementChild.style.opacity = 1;
                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;
                        slide.style.transition = `all 0.2s ease-in-out`;
                    }, 0);
                });
            }

            if (this.dataset.direction == 'next') {
                slides.push(slides.shift());
                slides.map(slide => {
                    sliderContainer.appendChild(slide);
                    let locationFromStart = slide.style.transform;
                    const locationFromStartInDigit = +(locationFromStart.match(/[\d]/g).join(''));
                    let locationOnClickFromStart = locationFromStartInDigit - distanceBetweenSlides;
                    if(locationOnClickFromStart < 0) {
                        locationOnClickFromStart = minDistanceFromStart;
                        slide.style.transition = `transform 0.2s ease-in-out`;
                        slide.style.transform = `translateX(0%)`;
                        setTimeout(() => {
                            slide.style.transform = `translateX(${locationOnClickFromStart}%)`;
                            locationOnClickFromStart = maxDistanceFromStart;
                            slide.style.opacity = 0;
                            slide.style.transform = `translateX(${locationOnClickFromStart}%)`;
                        }, 300);
                    }
                    setTimeout(() => {
                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;
                        slide.style.transition = `transform 0.2s ease-in-out`;
                        slide.style.opacity = 1;
                    }, 0);
                });
            }
        }

        buttons.forEach(btn => btn.addEventListener('click', debounce(moveSlides)));
    }
}
export default Generator;
