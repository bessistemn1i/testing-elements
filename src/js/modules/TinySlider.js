import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider';

class TnsSlider {
    constructor() {
        this.slider = document.querySelector(".tns-slider-Test");
        this.slide = [...document.querySelectorAll('.tns-slide')];
        this.customContainer = document.querySelector('.custom-container');
        this.lengthOfBigSlider = this.slide.length -1;
        this.addEvents();
    }

    addImagesToContainer(el) {
        const template = el;
        const images = this.slide;
        images.map((el) => {
            const cloned = el.cloneNode(true);
            template.appendChild(cloned);
        });
        return template;
    }

    addEvents() {
        console.log(document.querySelector('.someTestingBlock'));
        this.addImagesToContainer(this.customContainer);
        const big_tns = new tns({
            loop: false,
            container: this.slider,
            items: 1,
            autoplay: false,
            "navContainer": this.customContainer,
            "navAsThumbnails": true,
            "controls": false
        });

        const little_tns = new tns ({
            loop: false,
            container: this.customContainer,
            items: this.lengthOfBigSlider,
            mouseDrag: true,
            nav: false,
            controls: false,
            items: 3,
            controls: true,
            axis: "vertical",
            gutter: 20
        });
    }
}

export default TnsSlider;