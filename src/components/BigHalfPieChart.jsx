import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./graphics.css";

const BigHalfpieChart = ({ data }) => {
const datos=data;
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data2= 100-datos

    const emotionColors = {
        'data': '#FF9F1C',
        'data2': '#FFEACC',
    };

    const data1 = {
        datasets: [{
            data: [datos, data2],
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
        maintainAspectRatio: false,
    };
    
    

    return (
        <div className="big-halfpie-chart">
           
            <Doughnut data={data1} options={options} />
            <h4>{datos}%</h4>
        </div>
    );
}

export default BigHalfpieChart;