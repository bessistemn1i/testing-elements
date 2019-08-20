class SelectTest {
    constructor() {
        this.optionsForm = document.querySelector('.shop__content-ordering');
        this.select = document.querySelector('.shop__content-orderby');
        this.addEvents();
    }

    addEvents() {
        const options = [...this.select.querySelectorAll('option')];
        if(sessionStorage.getItem('autosave')) {
            options.map((el) => {
                el.removeAttribute('selected');
                if(el.value == sessionStorage.getItem('autosave')) {
                    el.setAttribute('selected', 'selected');
                }
            });
        }
        this.select.addEventListener('change', () => {
            this.select.options[this.select.selectedIndex].text = '';
            const url = this.select.value;
            sessionStorage.setItem('autosave', url);
            window.location = url;
        });
    }
}

export default SelectTest;