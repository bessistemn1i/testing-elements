class Oop {
    constructor() {
        this.events()
    }

    events() {
        (function () {
            function onLoad (data) {
                console.log(data);
            }
            function onError(message) {
                console.error(message);
            }
            window.onload = {
                save(onLoad, onError) {
                    let url = 'http://jsonplaceholder.typicode.com/posts';
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', url);
                    xhr.addEventListener('load', function () {
                        if(xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                onLoad(xhr.responseText);
                            }
                        }
                        else {
                            onError('You have a new error. Try again later.')
                        }
                    });
                    xhr.send();
                }
            }
            window.onload.save(onLoad, onError);
        })();
    }
}

export default Oop;