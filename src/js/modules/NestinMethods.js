class NestingMethods {
    constructor(someDates) {
        this.dates = someDates;
        this.changeDataType;
        this.getData;
        this.resultData;
        this.events();
    }

    changeDataType(someLetters) {
        let arr = someLetters.split(',').map((el) => {
            return +el;
        });
        return arr;
    };

    getData() {
        let inR = this.changeDataType(this.dates);
        return inR;
    };

    resultData() {
        let result = this.getData();
        let res = result.reduce((a,b) => {
            return a + b;
        },0);
        console.log(res);
    }
    events() {
        this.resultData();
    }
}

export default NestingMethods;