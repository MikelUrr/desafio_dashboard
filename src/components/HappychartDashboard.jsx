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
        
            if (response.status === 200) {
                setEmotions(data);
            }
        }
        fetchemotions();
    }, []);

    const dataEntrada = emotions ? emotions.porcentajesEntrada : 0;
    const dataSalida = emotions ? emotions.porcentajesSalida : 0;
    const dataTotal = emotions ? emotions.porcentajesTotal : 0;

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

     const emotionColors = {
        'alegria': '#FF9F1C',
        'ira': '#EB5757',
        'miedo': '#000',
        'tristeza': '#5F6AFF',
    };
 
  
    
    const datatotal = {
        labels: totalLabel,
        datasets: [{
            data: totalData,
            backgroundColor: totalLabel.map(emotion => emotionColors[emotion.toLowerCase()]),
            hoverBackgroundColor: totalLabel.map(emotion => emotionColors[emotion.toLowerCase()]),
        }]
    };
    
    const data1 = {
        labels: Object.keys(sortedDataEntrada),
        datasets: [{
            data: Object.values(sortedDataEntrada),
            backgroundColor: Object.keys(sortedDataEntrada).map(emotion => emotionColors[emotion.toLowerCase()]),
            hoverBackgroundColor: Object.keys(sortedDataEntrada).map(emotion => emotionColors[emotion.toLowerCase()]),
        }]
    };
    
    const data2 = {
        labels: Object.keys(sortedDataSalida),
        datasets: [{
            data: Object.values(sortedDataSalida),
            backgroundColor: Object.keys(sortedDataSalida).map(emotion => emotionColors[emotion.toLowerCase()]),
            hoverBackgroundColor: Object.keys(sortedDataSalida).map(emotion => emotionColors[emotion.toLowerCase()]),
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
            maintainAspectRatio: false,
        }
    };

    const ayer = getFormattedDate();
    return (
        <div className="happychart-container-dash">
            <div className="happychart-title">
                <h2>Emotion Index</h2>
                <h3>{ayer}</h3>

            </div>
            <div className="happychart-dash">
                <h6 className='entrada-dash'>Entrada</h6>
                <h6 className='salida-dash'>Salida</h6>
                <div className='dashboardchart'>
                <Doughnut data={data1} options={options1} />
                <Doughnut data={data2} options={options1} />
                <div className="happychart-labels_dash">
            <div className='uno'>
                    <div className='rectangle1'></div><p className='leyenda'>Miedo</p></div>
                <div className='uno'>
                    <div className='rectangle2'></div><p className='leyenda'>Tristeza</p></div>
                <div className='uno'>
                    <div className='rectangle3'></div><p className='leyenda'>Ira</p></div>
                <div className='uno'>
                    <div className='rectangle4'></div><p className='leyenda'>Alegria</p>
                </div>
            </div>
                </div>
            </div>
           
        </div>
    );
}

export default  HappychartDashboard;
