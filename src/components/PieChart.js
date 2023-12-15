import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({labels, data_s, bgs, bds, label}) => {

    const data = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data_s,
                backgroundColor: bgs,
                borderColor: bds,
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data}/>;
}

export default PieChart;
