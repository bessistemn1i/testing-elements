import NestingMethods from "./NestinMethods";

class Sub extends NestingMethods {
    constructor() {
        super(...arguments);
        this.newProp = 'new property';
        this.subevents();
    }

    summing(arr) {
        //super.summing(arr);
        let minus = arr.reduce((div, el) => {
            return div - el;
        });
        console.log(minus);
        return minus
    };

    multyplying(arr) {
        //super.multyplying(arr);
        let dividing = arr.reduce((res, el) => {
            return res/el;
        },1);
        console.log(dividing);
        return dividing;
    };
    
    subevents() {
        console.log(this.newProp);
    }
}

export default Sub;