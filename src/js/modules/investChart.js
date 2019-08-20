import Chart from '../../../node_modules/chart.js/dist/Chart.min.js';

class InvestChart {
    constructor() {
        this.ctx = document.querySelector("#canvas2017");
        this.addEvents();
    }
    addEvents() {
        const investChart = new Chart(this.ctx, {
            type: 'line',
            
            data: {
                labels: ['1 месяц', '1 год', '5 лет'],
                datasets: [{
                    label: 'Доля в размере 10%',
                    data: [40000, 480000, 2400000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1
                },
                {
                    label: 'Доля в размере 20%',
                    data: [80000, 960000, 4800000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1
                },
                {
                    label: 'Доля в размере 30%',
                    data: [120000, 1440000, 7200000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1
                },
                {
                    label: 'Доля в размере 40%',
                    data: [160000, 1920000, 9600000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1
                },
                {
                    label: 'Доля в размере 50%',
                    data: [200000, 2400000, 12000000],
                    lineTension: 0,
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#d6a354",
                    pointBackgroundColor: "#d6a354",
                    pointBorderWidth: 1
                },
            ],
            },
            options: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: '#333'
                    },
                    tooltips: {
                        custom: (tooltip) => {
                            if(!tooltip.opacity) {
                                document.querySelector('#canvas2017').style.cursor = 'default';
                                return;
                            }
                        }
                    },
                    onHover: (event, legendItem) => {
                        document.querySelector('#canvas2017').style.cursor = 'pointer'
                    },
                    onClick: function(e, legendItem) {
                        var index = legendItem.datasetIndex;
                        var ci = this.chart;
                        var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;
                        var anyOthersAlreadyHidden = false;
                        var allOthersHidden = true;
              
                        // figure out the current state of the labels
                        ci.data.datasets.forEach(function(e, i) {
                          var meta = ci.getDatasetMeta(i);
                          
                          if (i !== index) {
                            if (meta.hidden) {
                              anyOthersAlreadyHidden = true;
                            } else {
                              allOthersHidden = false;
                            }
                          }
                        });
                        
                        // if the label we clicked is already hidden 
                        // then we now want to unhide (with any others already unhidden)
                        if (alreadyHidden) {
                          ci.getDatasetMeta(index).hidden = null;
                        } else { 
                          // otherwise, lets figure out how to toggle visibility based upon the current state
                          ci.data.datasets.forEach(function(e, i) {
                            var meta = ci.getDatasetMeta(i);
              
                            if (i !== index) {
                              // handles logic when we click on visible hidden label and there is currently at least
                              // one other label that is visible and at least one other label already hidden
                              // (we want to keep those already hidden still hidden)
                              if (anyOthersAlreadyHidden && !allOthersHidden) {
                                meta.borderWidth = 'green';
                              } else {
                                // toggle visibility
                                meta.hidden = meta.hidden === null ? !meta.hidden : null;
                                meta.borderWidth = meta.borderWidth === 'red' ? !meta.borderWidth : 'green';
                              }
                            } else {
                              meta.hidden = null;
                            }
                          });
                        }
              
                        ci.update();
                      },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: (label, index, labels) => {
                          console.log(label);
                          if(label/1000 >= 1000) {
                            return label/1000000+' млн.'
                          }
                          else {
                            return label/1000+' тыс.';
                          }
                        },
                        scaleLabel: {
                          display: true,
                          labelString: '1млн. = 1000'
                        }
                      }
                    }
                  ]
                }
            }
        })
    }
}

export default InvestChart;