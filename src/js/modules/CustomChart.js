import Chart from '../../../node_modules/chart.js/dist/Chart.min.js';
import moment from '../../../node_modules/moment/min/moment-with-locales.min.js';

import 'moment/locale/ru';

class CustomChart {
    constructor(obj) {
        this.canvas = document.querySelector(obj.canvas);
        this.offices = obj.offices;
        this.addEvents();
    }

    addEvents() {
        moment.locale("ru");
        const sorted = this.offices.map((el) => {
            const elCor = el['Дата открытия'].split('-');
            const correctData = new Date(elCor[0], elCor[1] - 1, elCor[2]);
            const nameOfOffice = el['Город'];
            return {correctData, nameOfOffice}
        }).sort((a,b) => a.correctData - b.correctData);
        
        const dates = sorted.map((el) => el.correctData);

        const resultTest = [];
        
        const group_to_values = sorted.reduce((obj, item) => {
            obj[item.correctData.getFullYear()] = obj[item.correctData.getFullYear()] || [];
            obj[item.correctData.getFullYear()].push(item.correctData.getMonth()+1);
            return obj;
        }, {});

        const group = Object.keys(group_to_values).map((key) => {
            const testingArr = group_to_values[key];

            let arr2=[];

            for(let i = 0; i < testingArr.length; i++){
                if (arr2[testingArr[i]]!=undefined) {
                    (arr2[testingArr[i]]++)
                }
                else {
                    (arr2[testingArr[i]]=1)
                }
            }

            resultTest.push(arr2);
        });

        const resultFlat = resultTest.reduce((total, currentItem) => total.concat(currentItem), []).filter(() => {return true});
        let accFlat = [];

        resultFlat.reduce((acc, current, i) => {
            return accFlat[i] = acc+current;
        },0)

        const newresult = accFlat.map((el, idx) => {
            return {
                y: el,
                x: new Date(dates[idx].getFullYear(), idx+1)
            }
        });

        const ctx = this.canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(222, 171, 191, 400);
        gradient.addColorStop(0, 'rgba(222, 177, 191, 0.7)');
        gradient.addColorStop(1, 'rgba(251, 231, 224, 1)');
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        
        const config = {
            type: 'line',
            data: {
                datasets: [{
                    lineTension: 0.5,
                    label: 'Количество филиалов',
                    data: newresult,
                    borderWidth: 4,
                    borderColor: "#D8B96D",
                    backgroundColor: gradient,
                    fill: true,
                    pointRadius: 0
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Динамика роста числа филиалов oldboy'
                },
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                unit: 'month',
                                unitStepSize: 4,
                                round: 'month',
                                tooltipFormat: "YYYY-MM-DD",
                                displayFormats: {
                                month: 'YYYY-MM-DD'
                                }
                            },
                            ticks: {
                                callback: function(value) {
                                    return moment(value).format('MMMM YYYY');
                                }
                            }
                        }
                    ]
                },
            },
        };

        const chart = new Chart(ctx, config);
    }
}

export default CustomChart;