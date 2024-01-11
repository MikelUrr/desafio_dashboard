import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
/* import 'bootstrap/dist/css/bootstrap.min.css';  */
import { fetchEmotionData } from './../js/fetch.js';

const Comparativa = () => { 

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

    const dataEntrada = emotions ? emotions.porcentajesEntrada : {};
    const dataSalida = emotions ? emotions.porcentajesSalida : {};
    console.log(dataEntrada);
    console.log(dataSalida);
    const subtractedData = {};
    
    // Assuming both dataEntrada and dataSalida have the same keys
    const commonKeys = [...new Set([...Object.keys(dataEntrada), ...Object.keys(dataSalida)])];
    
    commonKeys.forEach(key => {
        const entradaValue = dataEntrada[key] || 0;
        const salidaValue = dataSalida[key] || 0;
    
        // Subtract the values and store the result
        subtractedData[key] = entradaValue - salidaValue;
    });
    
    console.log("Alegria:", subtractedData.Alegria);
    console.log("Tristeza:", subtractedData.Tristeza);
    console.log("Miedo:", subtractedData.Miedo);
    console.log("Ira:", subtractedData.Ira);
    const totalLabel = Object.keys(subtractedData);
    
    return (
        <div className="comparativa-container">
            <div className="comparativa-item">
                <div className="comparativa-item__title">
                    <h2>{subtractedData.Alegria}%</h2>
                    <div className="comparativa-item__chart">
                    <img src="/jobs.svg" alt="comparativa" />
                    </div>
                </div>
                <div className="comparativa-item__text">
                    <p>Variación diaria alegria</p>
                </div>
                <div className="comparativa-item__progress">
                <ProgressBar now={subtractedData.Alegria} label={`${subtractedData.Alegria}%`} />
                    </div>
                   
                
            </div>
            <div className="comparativa-item">
                <div className="comparativa-item__title">
                    <h2>{subtractedData.Ira}%</h2>
                    <div className="comparativa-item__chart">
                    <img src="/jobs.svg" alt="comparativa" />
                </div></div>
                <div className="comparativa-item__text">
                    <p>Variación diaria Ira</p>
                </div>
                <div className="comparativa-item__progress">
                <ProgressBar now={subtractedData.Alegria} label={`${subtractedData.Alegria}%`} />
                    </div>
                    
                
            </div>
            <div className="comparativa-item">
                <div className="comparativa-item__title">
                    <h2>{subtractedData.Miedo}%</h2>
                    <div className="comparativa-item__chart">
                    <img src="/jobs.svg" alt="comparativa" />
                </div></div>
                <div className="comparativa-item__text">
                    <p>Variación diaria Miedo</p>
                </div>
                <div className="comparativa-item__progress">
                <ProgressBar now={subtractedData.Miedo} label={`${subtractedData.Miedo}%`} />
                    </div>
                    
                
            </div>
            <div className="comparativa-item">
                <div className="comparativa-item__title">
                    <h2>{subtractedData.Tristeza}%</h2>
                    <div className="comparativa-item__chart">
                    <img src="/jobs.svg" alt="comparativa" />
                </div></div>
                <div className="comparativa-item__text">
                    <p>Variación diaria Tristeza</p>
                </div>
                <div className="comparativa-item__progress">
                <ProgressBar now={subtractedData.Tristeza} label={`${subtractedData.Tristeza}%`} />
                    </div>
                    
                
            </div>

        </div>
    );
}




export default Comparativa ;