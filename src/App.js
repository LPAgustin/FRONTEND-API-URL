import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPage from './PaymentPage';

function App() {
    return (
      <Router> 
        <Routes>
        <Route path="/payment/:uniqueId" element={<PaymentPage />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
