import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentPage from './PaymentPage';

const App = () => {
    return (
        <Routes>
            <Route path="/payment/:uniqueId" element={<PaymentPage />} />
        </Routes>
    );
};

export default App;
