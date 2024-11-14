// src/pages/TablePage.js
import React from 'react';
import Tabla from '../components/Tabla';

// Definir las columnas de la tabla (40 columnas en total)
const columnas = Array.from({ length: 40 }, (_, i) => ({
  headerName: `Columna ${i + 1}`,
  field: `columna${i + 1}`,
}));

// Definir los datos de la tabla (100 filas de ejemplo)
const datos = Array.from({ length: 100 }, (_, i) => {
  const rowData = {};
  for (let j = 1; j <= 40; j++) {
    rowData[`columna${j}`] = `Dato ${i + 1}-${j}`;
  }
  return rowData;
});

const TablePage = () => {
  return (
    <div className="table-page-container">
      <h2>Tabla con AG-Grid</h2>
      <Tabla columnas={columnas} datos={datos} />
    </div>
  );
};

export default TablePage;
