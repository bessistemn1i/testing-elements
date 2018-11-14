class AjaxSession {
    constructor() {
        this.events();
    }
    events() {
        let buttons = document.querySelectorAll('.favorite-button');

        function favorite() {
            let parent = this.parentElement;
            let xhr = new XMLHttpRequest();
            xhr.open('POST', `${window.location.origin}/testing/session`, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let result = xhr.responseText;
                    
                    if(result = 'true') {
                        parent.classList.add('blog-post--favorite');
                    }
                }
            };
            xhr.send("id="+parent.id);
        }

        for (let i = 0; i < buttons.length; i++) {
            let el = buttons[i];
            el.addEventListener('click', favorite);
        }
    }
}

export default AjaxSession;