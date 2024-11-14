// src/components/Sidebar/Sidebar.js
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Dashboard App</h3>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/table">Tabla</Link></li>
        <li><Link to="/reports">Reportes</Link></li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    position: 'fixed',
    left: 0,
    top: 0,
    borderRight: '2px solid #ccc',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
};

export default Sidebar;
