import React from 'react';
import { Radar, Line, Bar } from 'react-chartjs-2';
// Asegúrate de que los estilos estén importados
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Datos de ejemplo para las gráficas
const radarChartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Datos Radar',
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: 'rgba(179, 181, 198, 0.2)',
      borderColor: 'rgba(179, 181, 198, 1)',
      pointBackgroundColor: 'rgba(179, 181, 198, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179, 181, 198, 1)',
    }
  ]
};

const lineChartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ventas',
      data: [10, 20, 15, 30, 25],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
      tension: 0.1,
    }
  ]
};

const barChartData = {
  labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
  datasets: [
    {
      label: 'Ventas',
      data: [500, 400, 300, 600],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }
  ]
};

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      
      {/* Contenedor de las gráficas */}
      <div className="chart-grid">
        <div className="chart-box">
          <h3>Gráfico Radar</h3>
          <Radar data={radarChartData} />
        </div>
        <div className="chart-box">
          <h3>Gráfico de Líneas</h3>
          <Line data={lineChartData} />
        </div>
        <div className="chart-box">
          <h3>Gráfico de Barras</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart-box">
          <h3>Gráfico Radar 2</h3>
          <Radar data={radarChartData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
