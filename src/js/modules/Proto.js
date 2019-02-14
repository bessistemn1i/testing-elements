class Generator {
    constructor(obj) {
        this.amountOfSlides = obj.amountOfSlides;
        this.events();
    }

    events() {
        const buttons = document.querySelectorAll('[data-direction]');
        const slides = Array.from(document.querySelectorAll('.slide'));
        const sliderContainer = document.querySelector('.slider__container');
        let distanceFromStart = 0;
        let slideGapInProcent;
        let distanceBetweenSlides;
        let maxDistanceFromStart;
        let minDistanceFromStart;
        let amountOfSlides = this.amountOfSlides;
        function locateSlides() {
            let slideWidthInTheString = (window.getComputedStyle(slides[0])).getPropertyValue('max-width');
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
        locateSlides();

        function debounceOnResize(func) {
            let timer;
            return function (event) {
                if(timer) clearTimeout(timer);
                timer = setTimeout(func, 400, event);
            }
        }

        window.addEventListener('resize', debounceOnResize(locateSlides));

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
                        slide.style.transition = `all 0.25s ease-in-out`;
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
                    }

                    let counter = 0;
                    setTimeout(() => {
                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;
                        slide.style.transition = `transform 0.25s ease-in-out`;
                        slide.style.opacity = 1;
                        let firstInterval = setInterval(() => {
                            counter++;
                            if(counter >= 35) {
                                clearInterval(firstInterval);
                                sliderContainer.lastElementChild.style.opacity = 0;
                                locationOnClickFromStart = maxDistanceFromStart;
                                sliderContainer.lastElementChild.style.transform = `translateX(${locationOnClickFromStart}%)`;
                            }
                        }, 1);
                    }, 0);
                });
            }
        }
        buttons.forEach(btn => btn.addEventListener('click', moveSlides));
    }
}
export default Generator;
