import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./graphics.css";

const SmallHalfpieChart = ({ data }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const { title, value } = data;

    const emotionColors = {
        'data': '#5F6AFF',
        'data2': '#CCCFFF',
    };

    const data2 = 100 - value;

    const data1 = {
        datasets: [{
            data: [value, data2],
            backgroundColor: [
                emotionColors['data'],
                emotionColors['data2'],
            ],
            hoverOffset: 8
        }]
    };

    const options = {
        animation: {
            animateRotate: true
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        circumference: 180,
        rotation: 270,
        responsive: true,
        cutout: 90,
    };

    return (
        <div className="small-halfpie-chart">
            <h3>{title}</h3>
            <Doughnut data={data1} options={options} />
            <h4>{value}%</h4>
        </div>
    );
}

export default SmallHalfpieChart;