class Generator {
    constructor() {
        this.events();
    }

    events() {
        const sliderWrap = document.querySelector('.sliderWrap');
        const slider = document.querySelector('.slider');
        const slides = Array.from(document.querySelectorAll('.slide'));
        let addEvent = function (object, type, callback) {
            if(object == null || typeof object == 'undefined') return;
            if(object.addEventListener) {
                object.addEventListener(type, callback, false);
            }
            else if(object.attachEvent) {
                object.attachEvent("on" + type, callback);
            }
            else {
                object["on"+type] = callback;
            }
        };
        
        let numb = 0;
        function moving() {
            let slideWidth = +(slider.scrollWidth / 3).toFixed(2);
            let slideGap = 30;

            for(let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            numb = (slideWidth + (slideGap / 2)) * i;
            slide.style.maxWidth = `${slideWidth - slideGap}px`;
            slide.style.transform = `translateX(${numb}px)`;
            }
            
        }
        moving();

        function testing() {
            if(window.innerWidth > 1000) {
                console.log(1 + 1);
            }
            else {
                console.log(1+2);
            }
        }
        testing();
    }
}
export default Generator;
