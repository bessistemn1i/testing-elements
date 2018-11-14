class AjaxSelect {
    constructor() {
        this.events();
    }
    events() {
        let cat_select = document.querySelector('#category-select');

        function updateSubcategories() {
            let cat_select = document.querySelector('#category-select');
            let cat_subcat = document.querySelector('.subcategory');
            let cat_id = cat_select.options[cat_select.selectedIndex].value;
            let url = `${window.location.origin}/testing/categories?category_id=` + cat_id;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    cat_subcat.innerHTML = xhr.responseText;
                    cat_subcat.classList.add('subcategory--active');
                }
            }
            xhr.send();
        }

        cat_select.addEventListener('change', updateSubcategories);
    }
}

export default AjaxSelect;