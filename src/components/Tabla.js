import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa'; // Usamos iconos
import './Tabla.css';

const Tabla = () => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  
  // Función para obtener los datos de la API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/data');
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };

  // Función para generar las columnas (40 columnas)
  const generateColumnDefs = () => {
    const columns = [];
    for (let i = 1; i <= 40; i++) {
      columns.push({
        headerName: `Columna ${i}`,
        field: `columna${i}`,
        editable: i <= 10,  // Solo las primeras 10 columnas son editables
        cellStyle: { textAlign: 'center' },
      });
    }
    return columns;
  };

  useEffect(() => {
    fetchData();  // Llamada a la API para obtener los datos
    setColumnDefs(generateColumnDefs());  // Generamos las columnas
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para agregar una nueva fila
  const addRow = () => {
    const newRow = {};
    for (let i = 1; i <= 40; i++) {
      newRow[`columna${i}`] = i <= 10 ? (Math.random() * 1000).toFixed(2) : '';  // Generar datos aleatorios para las primeras 10 columnas
    }
    setRowData([...rowData, newRow]);  // Agregar nueva fila
  };

  // Función para eliminar las filas seleccionadas
  const deleteSelectedRows = () => {
    setRowData(rowData.filter(row => !row.selected));  // Eliminar filas seleccionadas
  };

  return (
    <div className="table-container">
      <div className="table-actions">
        <button className="add-row-btn" onClick={addRow}><FaPlusCircle /> Agregar fila</button>
        <button className="delete-row-btn" onClick={deleteSelectedRows}><FaTrashAlt /> Eliminar fila</button>
      </div>
      <div className="ag-theme-alpine">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={false}
          domLayout="normal"
          rowSelection="multiple"
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
            editable: true,
          }}
        />
      </div>
    </div>
  );
};

export default Tabla;
