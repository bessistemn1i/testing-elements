class InfiniteScroll {
    constructor() {
        this.container = document.querySelector('#blog-posts');
        this.load_more = document.querySelector('#load-more');
        this.spinner = document.querySelector('#spinner');
        this.page = parseInt(this.load_more.getAttribute('data-page'));
        this.timer;
        this.num = 0;
        this.showSpinner;
        this.hideSpinner;
        this.showLoadMore;
        this.hideLoadMore;
        this.appendToDiv;
        this.setCurrentPage;
        this.scrollReaction;
        this.loadMore;
        this.events();
    }

    events() {
        let self = this;
        
        self.load_more.addEventListener('click', () => {
            self.loadMore();
        });
        
        window.addEventListener('scroll', function () {
            self.scrollReaction();
        });
        
        self.loadMore();
    }

    
    showSpinner() {
        let self = this;
        this.spinner.style.display = "inline-block";
        self.timer = setInterval(() =>{
            self.num++;
            this.spinner.style.transform = `rotate(${self.num}deg)`;
        },10)

        if(this.spinner.style.display = "none") {
            clearInterval(self.timer);
        }
    }

    hideSpinner() {
        this.spinner.style.display = "none";
    }

    showLoadMore() {
        let self = this;
        self.load_more.style.display = "inline";
    }

    hideLoadMore() {
        let self = this;
        self.load_more.style.display = "none";
    }

    scrollReaction() {
        let self = this;
        let containerHeight = self.container.offsetHeight;
        let scrolledBy = window.innerHeight + window.pageYOffset;

        console.log(containerHeight + '/' + scrolledBy);
        if(scrolledBy >= containerHeight) {
            self.loadMore();
        }
    }

    loadMore() {
        let self = this;
        let request_in_progress = false;
        
        let next_page = self.page + 1;

        if(request_in_progress) {
            return;
        }

        request_in_progress = true;

        self.showSpinner();
        self.hideLoadMore();
        
        function setCurrentPage(page) {
            let load_more = document.querySelector('#load-more');
            load_more.setAttribute('data-page', page);
        }

        function appendToDiv(div, new_html) {
            let temp = document.createElement('div');
            temp.innerHTML = new_html;
            let class_name = temp.firstElementChild.className;
            let items = temp.getElementsByClassName(class_name);
            let len = items.length;
            for (let i = 0; i < len; i++) {
                div.appendChild(items[0]);
            }
        }

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${window.location.origin}/testing/infinity?page_num=` + next_page, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200) {
            let result = xhr.responseText;
            self.hideSpinner();
            setCurrentPage(next_page);
            // append results to end of blog posts
            appendToDiv(self.container, result);
            self.showLoadMore();
            request_in_progress = false;
            }
        };
        xhr.send();
    }
}

export default InfiniteScroll;