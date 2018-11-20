class AjaxForm {
    constructor() {
        this.events();
    }

    events() {
        let summ = document.querySelector('#result');
        let volume = document.querySelector('#volume');
        let btn = document.querySelector('#submit');
        let recount = document.querySelector('#recount');
        let origin_btn_value = btn.value;
        let timer;

        function postResult(value) {
            volume.innerHTML = value;
            summ.style.display = 'block';
        }

        function clearResult() {
            volume.innerHTML = '';
            summ.style.display = 'none';
        }

        function clearErrors() {
            let inputs = document.getElementsByTagName('input');
             for (let i = 0; i < inputs.length; i++) {
                 const element = inputs[i];
                 
                 element.classList.remove('error');
             }
        }

        function gatherFormData(form) {
            let inputs = form.getElementsByTagName('input');
            let array = [];
            for (let i = 0; i < inputs.length; i++) {
                const element = inputs[i].name + '=' + inputs[i].value;
                array.push(element);
            }
            return array.join('&');
        }

        function displayErrors(errors) {
            let inputs = document.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                let element = inputs[i];

                if(errors.indexOf(element.name) >= 0) {
                    element.classList.add('error');
                }
            }
        }
        
        function showSpinner() {
            let spinner = document.querySelector('.spinner');
            let num = 0;
            spinner.style.display = 'inline-block';
            timer = setInterval(function () {
                num++;
                spinner.style.transform = `rotateZ(${num}deg)`;
            },10)
        }

        function hideSpinner() {
            let spinner = document.querySelector('.spinner');
            setTimeout(function () {
                clearInterval(timer);
            });
            spinner.style.display = 'none';
        }

        function recounting() {
            let inputs = document.querySelectorAll('input[type="text"]');
            for (let i = 0; i < inputs.length; i++) {
                const element = inputs[i];
                element.value = '';
                recount.style.display = 'none';
                volume.innerHTML = 0;
                enabledSubmit();
            }
        }
        function enabledSubmit() {
            btn.disabled = false;
            btn.value = origin_btn_value;
        }

        function disabledSubmit() {
            btn.disabled = true;
            btn.value = 'Loading...'
        }

        function calculate() {
            clearResult();
            clearErrors();
            showSpinner();
            disabledSubmit();
            let form = document.querySelector('#measurement-form');
            let xhr = new XMLHttpRequest();
            let action = form.getAttribute('action');
            let form_data = gatherFormData(form);
            xhr.open("POST", action, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    let result = xhr.responseText;
                    hideSpinner();
                    enabledSubmit();
                    recount.style.display = 'block';
                    let json = JSON.parse(result);
                    if(json.hasOwnProperty('errors') && json.errors.length > 0) {
                        displayErrors(json.errors);
                    }
                    else {
                        postResult(json.volume);
                    }
                }
            };
            xhr.send(form_data);
        }
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            calculate();
        });
        recount.addEventListener('click', recounting);
    }
}

export default AjaxForm;