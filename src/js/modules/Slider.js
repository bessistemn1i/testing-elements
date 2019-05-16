export default class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.nav = document.querySelector('.slider__nav');
        this.prev = this.nav.querySelector('[data-path="prev"]');
        this.next = this.nav.querySelector('[data-path="next"]');
        this.sliderContainer = this.slider.querySelector('.slider__container');
        this.slides = [...document.querySelectorAll('.slide')];
        this.addEvents();
    }

    posSlides(arr) {
        arr.map((el, idx) => {
            const SLIDE_WIDTH = 300;
            if(idx == 0) {
                el.style.marginLeft = `-300px`;
            }
            el.style.marginLeft = `${SLIDE_WIDTH * idx}px`;
            el.style.display = `block`;
        });
    }

    moveBackward(arr) {
        const sliderNext = arr.slice(0, -1);
        this.sliderContainer.insertBefore(sliderNext[0], arr[1]);
        arr[arr.length - 1].style.marginLeft = '-300px';
        arr[arr.length - 1].style.display = 'none';

        setTimeout(() => {
            arr.unshift(arr.pop());
            
            //this.posSlides(sliderNext);
            this.posSlides(arr);
        }, 10);
    }

    moveForward(evt, arr) {
        const newSlider = arr.slice(1);
        
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
        this.next.addEventListener("click", (event) =>this.moveForward(event, this.slides));
    }
}