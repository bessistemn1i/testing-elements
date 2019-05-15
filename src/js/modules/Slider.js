export default class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.nav = document.querySelector('.slider__nav');
        this.prev = this.nav.querySelector('[data-path="prev"]');
        this.next = this.nav.querySelector('[data-path="next"]');
        this.sliderContainer = this.slider.querySelector('.slider__container');
        this.slides = [...document.querySelectorAll('.slide')];
        this.counter = 0;
        this.counterSlide = 0;
        this.counterHandler = 0;
        this.pos = 0;
        this.addEvents();
    }

    posSlides(arr) {
        arr.map((el, idx) => {
            const SLIDE_WIDTH = 300;
            el.style.marginLeft = `${SLIDE_WIDTH * idx}px`;
        });
    }

    moveBackward(arr) {
        arr[0].style.background = 'red';
        const sliderNext = arr.slice(0, -1);
        this.pos++;
        this.sliderContainer.insertBefore(sliderNext[0], arr[1]);
        arr[arr.length - 1].style.marginLeft = '-300px';
        setTimeout(() => {
            arr.unshift(arr.pop());
            this.posSlides(sliderNext);
        }, 10);
    }

    moveForward(arr) {
        arr[0].style.background = 'blue';
        const newSlider = arr.slice(1);
        this.pos--;
        
        this.sliderContainer.appendChild(newSlider[newSlider.length - 1]);
        arr[0].style.marginLeft = '-300px';
        setTimeout(() => {
            arr.push(arr.shift());
            this.posSlides(newSlider);
        }, 10);
    }
    
    addEvents() {
        this.posSlides(this.slides);
        this.prev.addEventListener('click', () => this.moveBackward(this.slides));
        this.next.addEventListener("click", () =>this.moveForward(this.slides));
    }
}