class DebounceTest {
    constructor() {
        this.addEvents();
    }

    debounceOnResize(func, time) {
        let timer;
        return function (event) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(func, time, event);
        };
    };

    testDeb() {
        console.log('debounced');
    }

    addEvents() {
        const myFunc = this.debounceOnResize(this.testDeb, 400)
        window.addEventListener('scroll', myFunc);
    }
}

export default DebounceTest;