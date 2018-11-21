class Autosuggest {
    constructor() {
        this.suggestions = document.querySelector('#suggestions');
        this.form = document.querySelector('.search-form');
        this.search = document.querySelector('#search');

        this.events();
    }

    showSuggestions(json) {

        self.suggestions.style.display = 'block';
    }

    getSuggestions() {
        let self = this;
        let q = self.search.value;
        console.log(self.search.value);
        if(q.length < 3) {
            self.suggestions.style.display = 'none';
        }

        let xhr = new XMLHttpRequest();
        xhr.open("GET", `autosuggest.php?q=q`, true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200) {
                let result = xhr.responseText;
                console.log(result);
                result = '{}';
                let json = JSON.parse(result);
                self.showSuggestions(json);
            }
        }
    }

    events() {
        let self = this;
        self.search.addEventListener('input', () => {
            self.getSuggestions();
        })
    }

}

export default Autosuggest;