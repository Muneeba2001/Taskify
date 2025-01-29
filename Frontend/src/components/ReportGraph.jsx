import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js setup
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReportGraph = () => {
  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Record Report',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#FF9B29',
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#654F90',
        pointBorderColor: '#654F90',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Report Overview' },
    },
    scales: {
      x: { title: { display: true, text: 'Month' } },
      y: { title: { display: true, text: 'Record Value' }, beginAtZero: true },
    },
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#654F90' }}>Record Report Graph</h2>
      <div style={{ position: 'relative', height: '300px', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ReportGraph;
