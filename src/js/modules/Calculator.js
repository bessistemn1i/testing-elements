class Calculator {
    constructor() {
        this.inputs = document.querySelectorAll('input[type="number"]');
        this.result = document.querySelector('.calc-block__result-numb');
        this.reset = document.querySelector('.calc-block__reset');
        this.items = document.querySelectorAll('.basket__item');
        this.spinnerBtns = document.querySelectorAll('.spinner__button');
        this.allResult = document.querySelector('.calc-block__result');
        this.cost = document.querySelectorAll('.basket__item-cost');
        this.Allsum = 0;
        this.res = 0;
        this.val;
        this.events();
    }

    summ(el, price, amount_input) {
        const cost = el.querySelector('.basket__item-cost');
        let num2 = +amount_input.value;
        let result = price * num2;
        cost.textContent = result;
        return result;
    }
    
    delete(el) {
        const elCost = el.querySelector('.basket__item-cost');
        const elPrice = el.querySelector('.spinner__input');
        const elCostNum = +elCost.textContent;
        this.res = +this.allResult.textContent - elCostNum
        this.allResult.textContent = this.res;
        elCost.textContent = '0';
        elPrice.value = 0;
    }

    count(el) {
        const price = +el.querySelector('.basket__item-price').textContent;
        const reset = el.querySelector('.basket__item-remove');
        const amount_input = el.querySelector('.spinner__input');
        amount_input.addEventListener('input', () => this.summ(el, price, amount_input));
        reset.addEventListener('click', () => this.delete(el));
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    countSpin(spBtn) {
        const spinInput = this.findParent(spBtn, 'spinner').querySelector('.spinner__input');
        const cost = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-cost');
        const price = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-price');
        const buttonMinus = this.findParent(spBtn, 'basket__item').querySelector('.spinner__minus');
        const buttonPlus = this.findParent(spBtn, 'basket__item').querySelector('.spinner__plus');
        if(spBtn.classList.contains('spinner__plus')) {
            spinInput.value = parseInt(spinInput.value, 10)+1;
            buttonMinus.disabled = false;
            let checker = +spinInput.value;
            if(checker >= 200) {
                checker = 200;
                buttonPlus.disabled = true;
            }

            return cost.textContent = +spinInput.value * +price.textContent;
        }
        
        if(spBtn.classList.contains('spinner__minus')) {
            spinInput.value = parseInt(spinInput.value, 10)-1;
            buttonPlus.disabled = false;
            let checker = +spinInput.value;
            if(checker <= 0) {
                buttonMinus.disabled = true;
            }

            return cost.textContent = +spinInput.value * +price.textContent;
        }
    }

    zeroize(el) {
        if(el.value == '') {
            el.value = 0;
        }
        else {
            return;
        }
    }

    checkInput(input) {
        const cost = +this.findParent(input, 'basket__item').querySelector('.basket__item-cost').textContent;
        if(this.val < input.value) {
            this.res -=cost;
        }
        else if (this.val > input.value ) {
            this.res +=cost;
        }
        else {
            this.res = cost;
        }
        this.allSumm(this.res);
    }

    allSumm(el1) {
        this.allResult.textContent = el1;
    }

    resetAll() {
        this.inputs.forEach((el) => {
            el.value = 0;
        });
        this.cost.forEach((cos) => {
            cos.textContent = '0';
        });
        this.res = 0;
        this.allResult.textContent = '0';
    }

    events() {
        this.items.forEach((el) => this.count(el));
        this.inputs.forEach((el) => el.addEventListener('blur', () => this.zeroize(el)));
        this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => this.countSpin(spBtn)));
        this.inputs.forEach((input) => input.addEventListener('change', () => this.checkInput(input)));
        this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => {
            const price = +this.findParent(spBtn, 'basket__item').querySelector('.basket__item-price').textContent;
            if(spBtn.classList.contains('spinner__plus')) {
                this.res += price;
            }
            if(spBtn.classList.contains('spinner__minus')) {
                this.res -= price;
            }
            this.allResult.textContent = this.res;
        }));
        this.reset.addEventListener('click', () => this.resetAll());
    }
}

export default Calculator;