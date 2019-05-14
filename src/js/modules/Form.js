class Form {
    constructor() {
        this.form = document.querySelector('#form');
        this.inputs = this.form.querySelectorAll('input:not([type="submit"])');
        this.dataFromLocalStorage = this.dataFromLocalStorage ? localStorage.getItem('form-test') : {};
        this.objToLocal = {};
        this.events();
    }

    sendForm(evt) {
        evt.preventDefault();
        const xhr = new XMLHttpRequest();
        const url = 'form.php';
        let dataJson = {};

        dataJson.name = document.querySelector('input[type="text"]').value;
        dataJson.email = document.querySelector('input[type="email"]').value;
        dataJson.tel = document.querySelector('input[type="tel"]').value;
        let jsonToSend = JSON.stringify(dataJson);
        xhr.open('POST', url, true);
        console.log(jsonToSend);
        xhr.send(jsonToSend);
    }

    addToLocalStorage(element) {
        this.objToLocal[element.getAttribute('name')] = element.value;
        localStorage.setItem('form-test', JSON.stringify(this.objToLocal));
        console.log(this.objToLocal);
    }

    events() {
        this.dataFromLocalStorage = JSON.parse(localStorage.getItem('form-test'));
        console.log(this.dataFromLocalStorage);
        const inputs = Array.from(this.inputs);
        inputs.map((el) => el.addEventListener('blur', () => this.addToLocalStorage(el)));
        const objFromLocal = this.dataFromLocalStorage;
        for (const key in objFromLocal) {
            if (objFromLocal.hasOwnProperty(key)) {
                const element = objFromLocal[key];
                inputs.map((el) => {
                    if(el.getAttribute('name') === key) {
                        el.value = element;
                    }
                });
            }
        }
        this.form.addEventListener('submit', () => this.sendForm(event));

    }
}

export default Form;