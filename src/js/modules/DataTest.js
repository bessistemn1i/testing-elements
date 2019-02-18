class DataTest {
    constructor() {
        this.events();
    }

    events() {
        let url = 'https://reqres.in/api/users?page=2';
        let template = document.querySelector('.data-test__template').content.querySelector('.data-test__template-content');

        (function grabData() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('load', function () {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    let dataObj = xhr.responseText;
                    dataObj = JSON.parse(dataObj);
                    showData(dataObj.data);
                }
            });
            xhr.send();
        })();

        function showData(dataFromServer) {
            dataFromServer.forEach(function (obj) {
                console.log(obj);
            });
        };

        function generateDomElement() {
            
        }
    }
}

export default DataTest;