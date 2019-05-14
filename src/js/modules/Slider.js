export default class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.nav = document.querySelector('.slider__nav');
        this.sliderContainer = this.slider.querySelector('.slider__container');
        this.slides = [...document.querySelectorAll('.slide')];
        this.counter = 0;
        this.addEvents();
    }

    cliker(evt, arr){
        const prev = evt.target.getAttribute('data-path') == 'prev';
        if(prev) {
            this.counter-= 250;
            this.slides.map((slide) => slide.style.transform = `translateX(${this.counter}px)`);
            arr.push(arr.shift());
            this.sliderContainer.appendChild(arr[arr.length - 1]);
        }
        else {
            this.counter+= 250;
            this.slides.map((slide) => slide.style.transform = `translateX(${this.counter}px)`);
            arr.unshift(arr.pop());
            this.sliderContainer.insertBefore(arr[0], arr[1]);
        }
    }

    addEvents() {
        this.nav.addEventListener("click", (event) =>this.cliker(event, this.slides));
    }
}