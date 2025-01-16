import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import logo from './logo.png';

const PaymentPage = () => {
    const { uniqueId } = useParams();
    console.log("Unique ID recibido:", uniqueId);
    const [paymentData, setPaymentData] = useState(null);
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'; // Variable de entorno
    console.log(process.env.REACT_APP_API_URL);


    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/wallet/payment-data/${uniqueId}`);
                console.log("Respuesta de la API:", response);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del pago');
                }
                const data = await response.json();
                console.log("Datos obtenidos del pago:", data);
                setPaymentData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPaymentData();
    }, [uniqueId, API_URL]);

    if (error) {
        return <div className="error-container">Error: {error}</div>;
    }

    if (!paymentData) {
        return <div className="loading-container">Cargando...</div>;
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo Whapy" className="logo" />
            <div className="details">
                <p><strong>Nombre:</strong> {paymentData.userName}</p>
                <p><strong>Monto:</strong> ${paymentData.amount}</p>
                <p><strong>Moneda:</strong> {paymentData.currency}</p>
                <p><strong>Red:</strong> {paymentData.network}</p>
                <p><strong>Billetera Principal:</strong> {paymentData.mainWallet}</p>
            </div>
            <div className="qr-container">
                <img src={paymentData.qrCode} alt="Código QR de pago" />
            </div>
            <button
                className="payment-button"
                onClick={() => alert('Pago completado')}
            >
                Pago realizado
            </button>
        </div>
    );
};

export default PaymentPage;
