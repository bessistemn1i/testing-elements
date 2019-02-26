class Summ {
    constructor() {
        this.canvas = document.querySelector('#arrow');
        this.inputN = document.querySelector('.input-numb');
        this.drawArrow;
        this.randomArr;
        this.firstEl = [6, 7, 8, 9];
        this.events();
    }
    randomArr(arr) {
        let sortedarr = arr.sort((a,b) => {
            return a - b;
        });
        let max = sortedarr.length-1;
        let min = 0;
        return sortedarr[Math.floor((Math.random() * (max - min) + min))];
    }
    validateNumb(n) {
        if(n == this.randomArr)
    }
    drawArrow(x) {
        let coordX = (x * 13.6) + 11;
        let canvas = this.canvas;
        let angle = (x * 10) - 12;
        let ctx = canvas.getContext('2d');
        ctx.moveTo(12,100);
        ctx.quadraticCurveTo(angle, 10, coordX, 100);
        ctx.strokeWidth = 4;
        ctx.stroke();
        this.inputN.style.left = coordX * 2 + 'px';
        this.inputN.addEventListener('keyup', () => validateNumb())
    }

    events() {
        
        this.drawArrow(this.randomArr(this.firstEl));
    }
}

export default Summ;