import React, { useEffect, useState } from 'react';
import { fetchEmotionData } from './../js/fetch.js';

const ComparativaItem = ({ porcentaje, emocion }) => {
  let color;
  let imagenSrc;

  if (['Miedo', 'Ira', 'Tristeza'].includes(emocion)) {
    color = porcentaje > 0 ? '#EB5757' : '#27AE60';
    imagenSrc = porcentaje > 0 ? '/caret-down-fill.svg' : '/caret-up-fill.svg';
  } else if (emocion === 'Alegria') {
    color = porcentaje > 0 ? '#27AE60' : '#EB5757';
    imagenSrc = porcentaje > 0 ? '/caret-up-fill.svg' : '/caret-down-fill.svg';
  } else {
    // Default para otras emociones
    color = porcentaje > 0 ? '#27AE60' : '#EB5757';
    imagenSrc = porcentaje > 0 ? '/caret-up-fill.svg' : '/caret-down-fill.svg';
  }

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


const Comparativa = () => {
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
    if(entradaValue>=salidaValue){
    subtractedData[key] = entradaValue - salidaValue;
    } else {
      subtractedData[key] = salidaValue - entradaValue;
    }
  });

  return (
    <div className="comparativa-container">
      {commonKeys.map(emocion => (
        <ComparativaItem
          key={emocion}
          porcentaje={subtractedData[emocion]}
          emocion={emocion}
        />
      ))}
    </div>
  );
};

export default Comparativa;
