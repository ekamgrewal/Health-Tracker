import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import GetAxiosData from './GetAxiosData';

const apiUrl = 'http://127.0.0.1:8000/api/6';

async function getNews() {
  const response = await axios.get(apiUrl);
}

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [100,2100,2200,65]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 500
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Weight', 'Calories In', 'Calories Out', 'HeartRate'
          ],
        }
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>

);
}
}

//const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(Chart), domContainer);

export default Chart;
