class AjaxPHP {
    constructor() {
        this.events();
    }

    events() {
        let btn = document.querySelector('.ajax-btn');
        let content = document.querySelector('.main');
        function takeData() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `${window.location.origin}/testing/Send`, true);
            xhr.onreadystatechange = function () {
                if(xhr.readyState < 4) {
                    content.innerHTML = 'Loading...';
                }
                if(xhr.readyState == 4 && xhr.status == 200) {
                    let json = JSON.parse(xhr.responseText);
                    content.innerHTML = json.second;
                }
            }
            
            xhr.send();
        }
        btn.addEventListener('click', takeData);
    }
}

export default AjaxPHP;