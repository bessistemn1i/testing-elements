class Calculator {
    constructor() {
        this.inputs = document.querySelectorAll('input[type="number"]');
        this.result = document.querySelector('.calc-block__result-numb');
        this.reset = document.querySelector('.calc-block__reset');
        this.items = document.querySelectorAll('.basket__item');
        this.spinnerBtns = document.querySelectorAll('.spinner__button');
        this.res = 0;
        this.events();
    }

    summing(el, price, amount_input) {
        const cost = el.querySelector('.basket__item-cost');
        let num2 = +amount_input.value;
        let result = price * num2;
        cost.textContent = result;
        return result;
    }
    
    delitins(el) {
        const elCost = el.querySelector('.basket__item-cost');
        const elPrice = el.querySelector('.spinner__input');
        elCost.textContent = '0';
        elPrice.value = 0;

    }

    counting(el) {
        const price = +el.querySelector('.basket__item-price').textContent;
        const reset = el.querySelector('.basket__item-remove');
        const amount_input = el.querySelector('.spinner__input');
        amount_input.addEventListener('input', () => this.summing(el, price, amount_input));
        reset.addEventListener('click', () => this.delitins(el));
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    countingSpin(evt, spBtn) {
        const spinInput = spBtn.parentElement.querySelector('.spinner__input');
        const cost = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-cost');
        const price = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-price');
        console.log(cost);
        console.log(price);
        if(spBtn.classList.contains('spinner__plus')) {
            spinInput.value = parseInt(spinInput.value, 10)+1;
            return cost.textContent = +spinInput.value * +price.textContent;
        }
        
        if(spBtn.classList.contains('spinner__minus')) {
            spinInput.value = parseInt(spinInput.value, 10)-1;
            return cost.textContent = +spinInput.value * +price.textContent;
        }
    }

    events() {
        this.items.forEach((el) => this.counting(el));
        this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => this.countingSpin(event, spBtn)));
    }
}

export default Calculator;