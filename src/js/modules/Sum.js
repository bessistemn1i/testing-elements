class Summ {
    constructor() {
        this.sum = document.querySelector('.sum');
        this.errored = this.sum.querySelector('.errored');
        this.canvas = document.querySelector('#arrow');
        this.inputN = document.querySelector('.input-numb');
        this.inputNSecond = document.querySelector('.input-numbSecond');
        this.inputs = document.querySelectorAll('.input-numb');
        this.message = document.createElement('div');
        this.firstEl = [6, 7, 8, 9];
        this.secondEl = [11,12,13,14];
        this.firstResult = this.randomArr(this.firstEl);
        this.secondResult = this.randomArr(this.secondEl);
        this.coordX = (this.firstResult * 13.6) + 11;
        this.coordXSecond = (this.secondResult * 13.6) + 11;
        this.angle = (this.firstResult * 10) / 2 + 20;
        this.angleSecond = ((this.secondResult + this.firstResult) * 10) / 2 + 40;
        this.drawFirstArrow;
        this.randomArr;
        this.validateFirstNumb;
        this.validateSecondNumb;
        this.firstMessage = false;
        this.secondMessage = false;
        this.resultMessage;
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

    drawFirstArrow() {
        let coordX = this.coordX;
        let canvas = this.canvas;
        let angle = this.angle;
        let ctx = canvas.getContext('2d');
        ctx.strokeWidth = 4;
        ctx.moveTo(12,100);
        ctx.quadraticCurveTo(angle, 10, coordX, 100);
        ctx.moveTo(coordX,100);
        ctx.lineTo((coordX - 7),95);
        ctx.moveTo(coordX, 100);
        ctx.lineTo((coordX - 0.5),91);
        ctx.stroke();
        this.inputN.style.left = coordX * 2 + 'px';
    }
 
    drawSecondArrow() {
        let coordX = (this.coordXSecond);
        let canvas = this.canvas;
        let angle = this.angleSecond;
        let ctx = canvas.getContext('2d');
        ctx.moveTo(this.coordX, 100);
        ctx.quadraticCurveTo(angle, 10, coordX, 100);
        ctx.moveTo(coordX,100);
        ctx.lineTo((coordX - 7),95);
        ctx.moveTo(coordX, 100);
        ctx.lineTo((coordX - 0.5),91);
        ctx.stroke();
        this.inputNSecond.classList.remove('input-numbSecond--visually-hidden');
        this.inputNSecond.style.left = (this.coordX + this.coordXSecond) * 2 - 40 + 'px';
    }

    validateFirstNumb(evt) {
        let firstRes = evt.target;
        let max = firstRes.getAttribute('max');
        if(firstRes.value > max) {
            firstRes.value == max;
        }
        if(isNaN(firstRes.value)) {
            firstRes.value = '';
            this.errored.style.display = 'block';
            this.errored.textContent = 'Enter your correct symbol. It must be a number'
        }
        else {
            this.errored.style.display = 'none';
        }

        if(firstRes.value == this.firstResult && firstRes.value != '') {
            firstRes.style.border = '2px solid green';
            this.drawSecondArrow();
            this.firstMessage = true;
            this.inputN.setAttribute('disabled', 'disabled');
        }
        else if (firstRes.value != this.firstResult && firstRes.value != '') {
            firstRes.style.border = '2px solid red';
        }
        else {
            firstRes.style.border = '2px solid black';
        }
    }

    validateSecondNumb(evt) {
        let secondRes = evt.target;
        if(isNaN(secondRes.value)) {
            secondRes.value = '';
            this.errored.style.display = 'block';
            this.errored.textContent = 'Enter your correct symbol. It must be a number'
        }
        else {
            this.errored.style.display = 'none';
        }
        if(secondRes.value == (this.secondResult - this.firstResult) && secondRes.value != '') {
            secondRes.style.border = '2px solid green';
            this.drawSecondArrow();
            this.secondMessage = true;
            this.inputNSecond.setAttribute('disabled', 'disabled');
        }
        else if (secondRes.value != (this.secondResult - this.firstResult) && secondRes.value != '') {
            secondRes.style.border = '2px solid red';
        }
        else {
            secondRes.style.border = '2px solid black';
        }
        if(secondRes.value != '') {
            this.resultMessage(this.firstMessage, this.secondMessage);
        }
    }

    resultMessage(f,s) {
        if(f && s) {
            this.message.classList.add('success');
            this.message.textContent = 'You are correct. Congratulations!';
        }

        else {
            this.message.classList.add('failed');
            this.message.textContent = 'You are looser. Get lost';
        }
        this.sum.appendChild(this.message);
        return this.message;
    }

    events() {
        this.inputN.addEventListener('keyup', () => this.validateFirstNumb(event));
        this.inputNSecond.addEventListener('keyup', () => this.validateSecondNumb(event));
        this.drawFirstArrow(this.firstResult);
    }
}

export default Summ;