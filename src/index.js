import React from 'react';
import ReactDOM from 'react-dom/client'; // Importación correcta para React 18
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usar la nueva API createRoot
root.render(
    <Router>
        <App />
    </Router>
);
