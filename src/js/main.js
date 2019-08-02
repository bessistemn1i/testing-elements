import officesArr from '../../office';
import CustomChart from './modules/CustomChart';
import DebounceTest from './modules/debounceTest';
import AjaxPosts from './modules/ajaxPosts';
import TinySlider from './modules/TinySlider';

new CustomChart({
    offices: officesArr,
    canvas: '#canvas2016'
});

//new DebounceTest();
new AjaxPosts();
new TinySlider();