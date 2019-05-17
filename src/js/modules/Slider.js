export default class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.nav = document.querySelector('.slider__nav');
        this.prev = this.nav.querySelector('[data-path="prev"]');
        this.next = this.nav.querySelector('[data-path="next"]');
        this.sliderContainer = this.slider.querySelector('.slider__container');
        this.slides = [...document.querySelectorAll('.custom-carousel__slide')];
        this.addEvents();
    }

    posSlides(arr) {
        arr.map((el, idx) => {
            const SLIDE_WIDTH = 300;
            if(idx == arr.length - 1) {
                el.style.marginLeft = `-300px`;
                el.style.display = 'none';
            }
            el.style.marginLeft = `${SLIDE_WIDTH * idx}px`;
            el.style.display = `block`;
        });
    }

    posSlidesBackward(arr) {
        const SLIDE_WIDTH = 300;
        arr[arr.length - 1].style.marginLeft = `-300px`;
        
        arr.map((el, idx) => {
            if(idx !== arr.length - 1) {
                el.style.marginLeft = `${SLIDE_WIDTH * idx}px`;
                el.style.display = 'none';
            }
            el.style.display = `block`;
        })
    }

    moveBackward(arr) {
        this.sliderContainer.insertBefore(arr[0], arr[1]);
        arr[arr.length - 2].style.display = 'none';
        setTimeout(() => {
            arr.unshift(arr.pop());
            this.posSlidesBackward(arr);
        }, 10);
    }

    moveForward(arr) {
        const newSlider = arr.slice(1);
        
        this.sliderContainer.appendChild(newSlider[newSlider.length - 1]);
        arr[0].style.marginLeft = '-300px';
        arr[arr.length - 1].style.display = 'none';

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