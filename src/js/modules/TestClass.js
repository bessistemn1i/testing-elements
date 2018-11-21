class TestClass {
    constructor() {
     this.events();
    }
    mult(a, b) {
        return a * b;
    }
    div(a, b) {
        return  a - b;
    }

    events() {
        console.log(`${this.mult(1, 8)} / ${this.div(9, 3)}`);
    }
}

export default TestClass;