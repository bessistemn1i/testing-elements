class InfiniteScroll {
    constructor() {
        this.container = document.querySelector('#blog-posts');
        this.load_more = document.querySelector('#load-more');
        this.spinner = document.querySelector('#spinner');
        this.request_in_progress = false;
        this.timer;
        this.num = 0;
        this.events();
    }
    
    showSpinner() {
        let self = this;
        self.spinner.style.display = "inline-block";
        self.timer = setInterval(() =>{
            self.num++;
            self.spinner.style.transform = `rotate(${self.num}deg)`;
        },10)
    }

    hideSpinner() {
        let self = this;
        self.spinner.style.display = "none";
        self.spinner.style.transform = 'none';
        clearInterval(self.timer);
    }

    showLoadMore() {
        let self = this;
        self.load_more.style.display = "inline";
    }

    hideLoadMore() {
        let self = this;
        self.load_more.style.display = "none";
    }

    loadMore() {
        let self = this;

        if(self.request_in_progress) {
            return;
        }
        self.request_in_progress = true;
        
        self.showSpinner();
        self.hideLoadMore();

        let page = parseInt(this.load_more.getAttribute('data-page'));
        let next_page = page + 1;

        
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
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
            let result = xhr.responseText;
            
            self.hideSpinner();
            setCurrentPage(next_page);
            appendToDiv(self.container, result);
            self.showLoadMore();
            self.request_in_progress = false;
            }
        };
        xhr.send();
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
    
    events() {
        let self = this;
        
         self.load_more.addEventListener('click', () => {
             self.loadMore();
         });
        
         window.addEventListener('scroll', () => {
             self.scrollReaction();
         })
        
        self.loadMore();
    }
}

export default InfiniteScroll;