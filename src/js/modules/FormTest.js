class FormTest {
    constructor() {
        this.form = document.querySelector('#form');
        this.inputs = Array.from(document.querySelectorAll('input[type="text"]'));
        this.list = document.querySelector('.form-content');
        this.itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        this.data = JSON.parse(localStorage.getItem('items'));
        this.objToLocal = {};
        this.events();
    }
    getFormData(arr) {
        let res = [];
        arr.forEach((el) => {
            res.push(el.value);
        });
        res = res.join(' ');
        console.log(res);
        return res;
    }

    getDataFromStorage(arr) {
        arr.forEach((el) => {
            return el;
        });
    }

    clearFormData(arr) {
        arr.forEach((el) => {
            return el.value = '';
        });
    }

    sendForm(evt) {
        evt.preventDefault();
        const li = document.createElement('li');
        if(this.getFormData(this.inputs).length > 1) {
            li.textContent = this.getFormData(this.inputs);
            this.list.appendChild(li);
            this.clearFormData(this.inputs);
            localStorage.clear('items');
        }
    }

    addToObj(evt) {
        console.log(this.objToLocal);
        if(evt.target.value != '') {
            this.objToLocal[`${evt.target.getAttribute('name')}`] = evt.target.value;
            localStorage.setItem('items', JSON.stringify(this.objToLocal));
        }
    }

    events() {
        localStorage.setItem('items', JSON.stringify(this.itemsArray));
        if(this.itemsArray.length != 0) {
            console.log(this.data);
            for (const key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    const element = this.data[key];
                    this.inputs.forEach((el) => {
                        if(el.getAttribute('name') == key)
                        el.value = element;
                    })
                }
            }
        }
        
        this.inputs.map((el) => el.addEventListener('blur', () => this.addToObj(event)));
        this.form.addEventListener('submit', () => this.sendForm(event))
    }
}

export default FormTest;