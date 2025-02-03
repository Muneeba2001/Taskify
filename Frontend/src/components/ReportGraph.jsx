import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReportGraph = ({ tasks }) => {
  const dueDateCounts = tasks.reduce((acc, task) => {
    const dueDate = new Date(task.dueDate).toLocaleDateString();
    acc[dueDate] = (acc[dueDate] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(dueDateCounts),
    datasets: [
      {
        label: 'Tasks by Due Date',
        data: Object.values(dueDateCounts),
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
      title: { display: true, text: 'Tasks by Due Date' },
    },
    scales: {
      x: { title: { display: true, text: 'Due Date' } },
      y: { title: { display: true, text: 'Count' }, beginAtZero: true },
    },
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#654F90' }}>Tasks by Due Date</h2>
      <div style={{ position: 'relative', height: '300px', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ReportGraph;