import React, { useEffect } from 'react';

const HeatmapTracker = () => {

    useEffect(() => {
        const handleMouseMove = (event) => {
            const data = {
                section: 'main-content', // Cambia esto según la sección donde quieras capturar los datos
                action: 'mousemove',
                x: event.clientX,
                y: event.clientY
            };
            sendDataToBackend(data);
        };

        const handleClick = (event) => {
            const data = {
                section: 'main-content', // Cambia esto según la sección donde quieras capturar los datos
                action: 'click',
                x: event.clientX,
                y: event.clientY
            };
            sendDataToBackend(data);
        };

        // Escuchar eventos de mouse
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            // Limpia los event listeners cuando el componente se desmonte
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const sendDataToBackend = (data) => {
        fetch('http://localhost:5000/api/heatmap/heatmap', { // URL actualizada
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch((error) => console.error('Error sending heatmap data:', error));
    };

    return null; // Este componente no renderiza nada visualmente
};

export default HeatmapTracker;
