import officesArr from '../../office';
import CustomChart from './modules/CustomChart';
import DebounceTest from './modules/debounceTest';
import AjaxPosts from './modules/ajaxPosts';
import TinySlider from './modules/TinySlider';
//import SelectTest from './modules/SelectTest';
//import SmoothScroll from './modules/SmoothScroll';
import InvestChart from './modules/investChart';

new CustomChart({
    offices: officesArr,
    canvas: '#canvas2016'
}); 

new InvestChart();

//new DebounceTest();
/* new AjaxPosts();
new TinySlider(); */
//new SelectTest();

//new SmoothScroll();