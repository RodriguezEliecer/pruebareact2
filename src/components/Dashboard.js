import React from 'react';

import { Line, Bar, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function Dashboard({ data }) {
  const lineChartData = {
    labels: data.map((_, index) => `Fila ${index + 1}`),
    datasets: [
      {
        label: 'Columna 1',
        data: data.map(row => row[0]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: data.map((_, index) => `Fila ${index + 1}`),
    datasets: [
      {
        label: 'Columna 2',
        data: data.map(row => row[1]),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const radarChartData = {
    labels: data.map((_, index) => `Fila ${index + 1}`),
    datasets: [
      {
        label: 'Valor Total',
        data: data.map(row => row.reduce((sum, val) => sum + parseFloat(val), 0)),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div style={styles.dashboard}>
      <h2>Dashboard</h2>
      <div style={styles.chartContainer}>
        <div style={styles.chart}>
          <h3>Gráfico de Línea</h3>
          <Line data={lineChartData} />
        </div>
        <div style={styles.chart}>
          <h3>Gráfico de Barras</h3>
          <Bar data={barChartData} />
        </div>
        <div style={styles.chart}>
          <h3>Gráfico de Radar</h3>
          <Radar data={radarChartData} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    marginLeft: '250px',
    padding: '20px',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  chart: {
    width: '30%',
  },
};

export default Dashboard;
