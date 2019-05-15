class ArrayTest {
    constructor() {
        this.events();
    }

    testArr(element, arr) {
        arr.forEach((el) => {
            if(el == element) {
                console.log(el);
            }
        });
    }

    events() {
        const arr1 = [1,2,3,4,5,6];
        const arr2 = [5,6,7,84,34,2];
        
        arr1.forEach((el) => this.testArr(el, arr2));
    }
}

export default ArrayTest;