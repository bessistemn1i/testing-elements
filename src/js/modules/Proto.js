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
        function sliding() {
            if(this.dataset.direction == 'prev') {
                n+=35;
                arrCT.style.transform = `translateX(${n}%)`;/* 0 */
                slides.unshift(slides.pop());
                slides.map(item => {
                    arrCT.appendChild(item);
                });
            }
            if (this.dataset.direction == 'next') {
                n-= 35;
                arrCT.style.transform = `translateX(${n}%)`;/* 
                if (n < (-slideGap * (slides.length-3))) {
                    arrCT.style.transform = `translateX(0)`;
                    n = 0;
                } */
                slides.push(slides.shift());
                slides.map(item => {
                    arrCT.appendChild(item);
                });
            }
        }

        bts.forEach(btn => btn.addEventListener('click', sliding));
    }
}
export default Generator;
