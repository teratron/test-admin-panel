import React from "react";
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            //label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: 'rgba(3, 102, 71, .3)',
            borderColor: 'rgba(3, 102, 71, .7)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

function ChartLine() {
    return (
        <Line data={data} options={options}/>
    )
}

export default ChartLine;
