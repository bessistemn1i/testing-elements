class TestClass {
    constructor() {
    this.mult;
     this.events();
    }
    mult(a, b) {
        console.log(`${a * b}`);
    }

    events() {
        function innerFunc() {
            this.mult(3, 5);
        }
    }
}

export default TestClass;