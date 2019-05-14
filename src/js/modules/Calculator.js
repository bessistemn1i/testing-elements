class Calculator {
    constructor() {
        this.inputs = document.querySelectorAll('input[type="number"]');
        this.reset = document.querySelector('.calc-block__reset');
        this.items = document.querySelectorAll('.basket__item');
        this.spinnerBtns = document.querySelectorAll('.spinner__button');
        this.allResult = document.querySelector('.calc-block__result');
        this.cost = document.querySelectorAll('.basket__item-cost');
        this.arr = [];
        this.res = 0;
        this.result = 0;
        this.events();
    }

    summ(el, price, amount_input, btnMinus, btnPlus) {
        const cost = el.querySelector('.basket__item-cost');
        if(+amount_input.value > 200 ) {
            btnPlus.disabled = true;
            btnMinus.disabled = false;
            amount_input.value = 200;
        }
        if(+amount_input.value < 0) {
            btnMinus.disabled = true;
            btnPlus.disabled = false;
            amount_input.value = 0;
        }
        if(+amount_input.value > 0 ) {
            btnMinus.disabled = false;
        }
        
        if(+amount_input.value == 0) {
            btnMinus.disabled = true;
        }
        
        let val = +amount_input.value;
        val = +amount_input.value;
        let result = price * val;
        cost.textContent = result;
        return result;
    }
    
    delete(el) {
        const elCost = el.querySelector('.basket__item-cost');
        const elPrice = el.querySelector('.spinner__input');
        const btnMinus = el.querySelector('.spinner__minus');
        const elCostNum = +elCost.textContent;
        this.res = +this.allResult.textContent - elCostNum
        this.allResult.textContent = this.res;
        btnMinus.disabled = true;
        elCost.textContent = '0';
        elPrice.value = 0;
        let index = this.arr.indexOf(el);
        this.arr.splice(index, 1);
    }

    count(el) {
        console.log(el);
        const price = +el.querySelector('.basket__item-price').textContent;
        const reset = el.querySelector('.basket__item-remove');
        const amount_input = el.querySelector('.spinner__input');
        const buttonMinus = el.querySelector('.spinner__minus');
        const buttonPlus = el.querySelector('.spinner__plus');

        amount_input.addEventListener('input', () => this.summ(el, price, amount_input, buttonMinus, buttonPlus));
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
        const parents = this.findParent(input, 'basket__item');
        const itm = +this.findParent(input, 'basket__item').querySelector('.basket__item-cost').textContent;
        console.log(this.inputs);
        //let index = this.inputs.indexOf(parent);
        let inx = this.arr.indexOf(itm);
        if(inx == -1) {
            this.arr.push(this.findParent(input, 'basket__item').querySelector('.basket__item-cost'));
        }
        console.log(itm);
        //console.log(index);
        console.log(inx);
        let digits = Array.from(this.arr).map((el) => +el.textContent);
        digits.splice(4);
        this.result = digits.reduce((sum, el) => {
            return sum + el;
        },0);
        this.allResult.textContent = this.result;
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
        this.spinnerBtns.forEach((btn) => {
            if(btn.classList.contains('spinner__minus')) {
                btn.disabled = true;
            }
        });
        this.arr = [];
    }

    compose(component, ...args) {
        const res = args.reduceRight((prevVal,curVal) => prevVal.concat(curVal), component)
        console.log(res);
        return res;
    }
    events() {
        this.compose('xxx', 'a', 'b', 'c');
        console.log(this.compose);
        this.items.forEach((el) => this.count(el));

        this.inputs.forEach((el) => el.addEventListener('blur', () => this.zeroize(el)));

        this.inputs.forEach((input) => input.addEventListener('change', () => this.checkInput(input)));
        /* this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => this.countSpin(spBtn))); */


        this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => {
            const cost = +this.findParent(spBtn, 'basket__item').querySelector('.basket__item-cost').textContent;

            this.countSpin(spBtn);
            this.checkInput(spBtn);

            if(spBtn.classList.contains('spinner__plus')) {
                this.res += cost;
            }
            if(spBtn.classList.contains('spinner__minus')) {
                this.res -= cost;
            }
            this.allResult.textContent = this.result;
        }));

        this.reset.addEventListener('click', () => this.resetAll());
    }
}

export default Calculator;