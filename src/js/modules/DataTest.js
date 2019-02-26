class DataTest {
    constructor() {
        this.events();
    }
    events() {
        let dataPresent = document.querySelector('.data-present');
        let fragment = document.createDocumentFragment();
        let xhr = new XMLHttpRequest();
        let dataObj;
        let url = 'https://reqres.in/api/users?page=2';
        (function grabData() {
                
            xhr.open('GET', url);
            xhr.addEventListener('load', function () {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    dataObj = xhr.responseText;
                    dataObj = JSON.parse(dataObj);
                    showData(dataObj.data);
                }
            });
            xhr.send();
        })();
        function showData(dates) {
            dates.forEach(function (obj) {
                
            });
        };

    }
}
export default DataTest;