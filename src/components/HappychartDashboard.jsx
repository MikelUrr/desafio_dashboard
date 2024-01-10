import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { fetchEmotionData } from './../js/fetch.js';
import { getFormattedDate } from './../js/functions.js';
import './components.css';


const HappychartDashboard = () => {
    const [emotions, setEmotions] = useState(null);

    useEffect(() => {
        const fetchemotions = async () => {
            const { response, data } = await fetchEmotionData();
            console.log("1", data.entradaSalidaTotals.Entrada);
            if (response.status === 200) {
                setEmotions(data);
            }
        }
        fetchemotions();
    }, []);

    const dataEntrada = emotions ? emotions.entradaSalidaTotals.Entrada : 0;
    const dataSalida = emotions ? emotions.entradaSalidaTotals.Salida : 0;
    const dataTotal = emotions ? emotions.totalTotals : 0;
    const sortedDataEntrada = Object.fromEntries(
        Object.entries(dataEntrada).sort(([a], [b]) => a.localeCompare(b))
    );

    const sortedDataSalida = Object.fromEntries(
        Object.entries(dataSalida).sort(([a], [b]) => a.localeCompare(b))
    );

    const sortedDataTotal = Object.fromEntries(
        Object.entries(dataTotal).sort(([a], [b]) => a.localeCompare(b))
    );
    const totalLabel = Object.keys(sortedDataTotal);
    const totalData = Object.values(sortedDataTotal);


    ChartJS.register(ArcElement, Tooltip, Legend);

    const datatotal = {
        labels: totalLabel,
        datasets: [{
            data: totalData,
            backgroundColor: [
                '#EB5757',
                '#000',
                '#FF9F1C',
                '#5F6AFF'
            ],
            hoverBackgroundColor: [
                '#EB5757',
                '#000',
                '#FF9F1C',
                '#5F6AFF'
            ]
        }]
    };

    const data1 = {
        labels: Object.keys(sortedDataEntrada),
        datasets: [{
            data: Object.values(sortedDataEntrada),
            backgroundColor: [
                '#EB5757',
                '#000',
                '#FF9F1C',
                '#5F6AFF'
            ],
            hoverBackgroundColor: [
                '#EB5757',
                '#000',
                '#FF9F1C',
                '#5F6AFF'
            ]
        }]
    };
    const data2 = {
        labels: Object.keys(sortedDataSalida),
        datasets: [{
            data: Object.values(sortedDataSalida),
            backgroundColor: [
                '#FF9F1C',
                '#5F6AFF',
                '#000',
                '#EB5757'
            ],
            hoverBackgroundColor: [
                '#FF9F1C',
                '#5F6AFF',
                '#000',
                '#EB5757'
            ]
        }]
    };
    const options1 = {
        animation: {
            animateRotate: true
        },
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    display: false,
                    font: {
                        size: 14,
                    }
                }
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return  context.parsed + '%';
                    },
                    // Add a percentage callback to display the percentage in the tooltip
                    percentage: function (context) {
                        return Math.round(context.parsed / context.dataset.data.reduce((a, b) => a + b) * 100) + '%';
                    }
                }
            },

        }
    };

    const ayer = getFormattedDate();
    return (
        <div className="happychart-container">
            <div className="happychart-title">
                <h2>Happiness Index</h2>
                <h3>{ayer}</h3>

            </div>
            <div className="happychart">
                <h6 className='entrada'>Entrada</h6>
                <h6 className='salida'>Salida</h6>
                
                <Doughnut data={data1} options={options1} />
                <Doughnut data={data2} options={options1} />
                
            </div>
            <div className="happychart-labels_dash">
                <div className='uno'>
                    <div className='rectangle1'></div><p>Alegria</p></div>
                <div className='uno'>
                    <div className='rectangle2'></div><p>Ira</p></div>
                <div className='uno'>
                    <div className='rectangle3'></div><p>Miedo</p></div>
                <div className='uno'>
                    <div className='rectangle4'></div><p>Tristeza</p>
                </div>
            </div>
        </div>
    );
}

export default  HappychartDashboard;
