import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartHorizontal = () => {
    const labels = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // Genera etiquetas de la A a la Z
    const dataValues = Array.from({ length: 26 }, (_, i) => (i + 1) * 10); // Genera valores de datos basados en el índice
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: dataValues,
          backgroundColor: '#EB5757',
        },
      ],
    };
  const options = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false, // Añadir esta línea para ajustar el tamaño
  };

  return (
    <div className="bar-chart-horizontal" >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartHorizontal;
