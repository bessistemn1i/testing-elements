class NestingMethods {
    constructor(...terms) {
        this.terms = [...terms];
        this.summing;
        this.multyplying;
        this.events();
    }

    summing(arr) {
        let result = arr.reduce((sum, el) => {
            return sum+el;
        },0);
        console.log(result);
        return result;
    };
    multyplying(arr) {
        let result = arr.reduce((res, el) => {
            return res*el;
        },1);
        console.log(result);
        return result;
    };
    events() {
        this.summing(this.terms);
        this.multyplying(this.terms);
    }
}

export default NestingMethods;