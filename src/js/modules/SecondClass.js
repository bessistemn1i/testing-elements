import NestinMethods from "./NestinMethods";
class SecondClass extends NestinMethods {
    constructor(...args) {
        super(...args);
        this.name = 'bill';
        this.newMethod();
    }
    resultData() {
        let result = this.getData();
        let res = result.reduce((a,b) => {
            return a * b;
        },1)
        return res;
    }
    newMethod() {
        console.log(`${this.name} - ${this.resultData()}`);
        return `${this.name} - ${this.resultData()}`;
    }
}

export default SecondClass;