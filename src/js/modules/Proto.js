class Generator {
    constructor() {
        this.events();
    }

    events() {
        const bts = document.querySelectorAll('[data-direction]');
        const slides = Array.from(document.querySelectorAll('.slide'));
        const arrCT = document.querySelector('.slider__contaner');
        let numb = 0;
        function moving() {
            let slideWidth = 30;

            for(let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            numb = ((slideWidth - 13) + 100) * i;
            slide.style.maxWidth = `${slideWidth}%`;
            slide.style.transform = `translateX(${numb}%)`;
            }
            
        }
        moving();

        let n = 0;
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

        function sliding() {
            
            if(this.dataset.direction == 'prev') {
                n+=35;
                slides.unshift(slides.pop());
                slides.map(item => {
                    arrCT.appendChild(item);

                    let resPrev = item.style.transform;
                    const resNumb = +(resPrev.match(/[\d]/g).join(''));
                    let resToSlidePrev = resNumb + 117;
                    item.style.opacity = 1;
                    if(resToSlidePrev > 468) {
                        resToSlidePrev = -117;
                        item.style.opacity = 0;
                        item.style.transform = `translateX(${resToSlidePrev}%)`;
                    }
                    setTimeout(() => {
                        arrCT.firstElementChild.style.transform = `translateX(0%)`;
                        arrCT.firstElementChild.style.opacity = 1;
                        item.style.transform = `translateX(${resToSlidePrev}%)`;
                        item.style.transition = `all 0.3s ease-in-out`;
                    }, 0);
                });
            }

            if (this.dataset.direction == 'next') {
                n -= 35;
                slides.push(slides.shift());
                slides.map(item => {
                    arrCT.appendChild(item);
                    let resNext = item.style.transform;
                    const resNumb = +(resNext.match(/[\d]/g).join(''));
                    let resToSlide = resNumb - 117;
                    if(resToSlide < 0) {
                        resToSlide = -117;
                        item.style.transition = `transform 0.3s ease`;
                        item.style.transform = `translateX(0%)`;
                        setTimeout(() => {
                            item.style.transform = `translateX(${resToSlide}%)`;
                            resToSlide = 468;
                            item.style.opacity = 0;
                            item.style.transform = `translateX(${resToSlide}%)`;
                        }, 300);
                    }
                    setTimeout(() => {
                        item.style.transform = `translateX(${resToSlide}%)`;
                        item.style.transition = `transform 0.3s ease-in-out`;
                        item.style.opacity = 1;
                    }, 0);
                });
            }
        }

        bts.forEach(btn => btn.addEventListener('click', debounce(sliding)));
    }
}
export default Generator;
