import React, { useEffect, useState } from 'react';
import { fetchEmotionData } from './../js/fetch.js';


const ComparativaItem = ({ porcentaje, emocion }) => {
    const color = porcentaje > 0 ? '#27AE60' : '#EB5757';
    const imagenSrc = porcentaje > 0 ? '/caret-up-fill.svg' : '/caret-down-fill.svg';
  
    const h2Style = {
      color: color,
    };
  
    return (
      <div className="comparativa-item">
        <div className="comparativa-item__title">
          <h2 style={h2Style}>{porcentaje}%</h2>
          <div className="comparativa-item__chart">
            <img src={imagenSrc} alt="comparativa" />
          </div>
        </div>
        <div className="comparativa-item__text">
          <p>Variación diaria de la <b>{emocion}</b></p>
        </div>
      </div>
    );
  };
const ComparativaDash = () => {
    const [emotions, setEmotions] = useState(null);
  
    useEffect(() => {
      const fetchemotions = async () => {
        const { response, data } = await fetchEmotionData();
  
        if (response.status === 200) {
          setEmotions(data);
        }
      };
      fetchemotions();
    }, []);
  
    const dataEntrada = emotions ? emotions.porcentajesEntrada : {};
    const dataSalida = emotions ? emotions.porcentajesSalida : {};
  
    const subtractedData = {};
    const commonKeys = [...new Set([...Object.keys(dataEntrada), ...Object.keys(dataSalida)])];
  
    commonKeys.forEach(key => {
      const entradaValue = dataEntrada[key] || 0;
      const salidaValue = dataSalida[key] || 0;
      subtractedData[key] = entradaValue - salidaValue;
    });
  
    // Filtrar la última emoción
    const commonKeysExceptLast = commonKeys.slice(0, -1);
  
    return (
      <div className="comparativa-container-dash">
        {commonKeysExceptLast.map(emocion => (
          <ComparativaItem
            key={emocion}
            porcentaje={subtractedData[emocion]}
            emocion={emocion}
          />
        ))}
      </div>
    );
  };
  
  export default ComparativaDash;