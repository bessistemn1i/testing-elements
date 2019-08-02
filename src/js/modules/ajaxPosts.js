class AjaxPosts {
    constructor() {
        this.trigger = document.querySelector('.addData');
        this.addEvents();
    }

    getListRange(products, from, to) {
        const template = [];
        let e, a;

        if(products.length <= to) {to = products.length};

        for(let i = from; i < to; i++) {
            e = products[i];
            a = document.createElement('a');
            a.className = 'link';
            a.href=`http://some-address/?id=${e.userId}`;
            a.innerHTML = `<div><span>${e.userId}</span>: <span>${e.title}</span></div>`
            template.push(a);
        }

        if(products.length > to) {
            const btn = document.createElement('button');
            btn.innerText = 'Показать еще';
            btn.addEventListener('click', () => {
                this.contentHTML(this.getListRange(products, to, to+5));
                btn.parentElement.removeChild(btn);
            });
            template.push(btn);
        }
        return template;
    }

    contentHTML(list) {
        const listHTML = list;
        let docfrag = document.createDocumentFragment();
        let container = document.querySelector('.ajaxTest-container');

        function viewProducts(list) {
            for(let i = 0; i < list.length; i++) {
                docfrag.appendChild(list[i]);
            }
            container.appendChild(docfrag);
        }
        viewProducts(listHTML);
    }

    fetchData() {
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            this.contentHTML(this.getListRange(data, 0, 10));
        })
        .catch(error => console.error(error))
    }

    addEvents() {
        this.fetchData();
    }
}

export default AjaxPosts;