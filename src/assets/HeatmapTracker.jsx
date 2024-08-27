import React, { useEffect } from 'react';

const getSection = (event) => {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element) return 'unknown';

    if (element.closest('.header')) return 'header';
    if (element.closest('.main')) return 'main';
    if (element.closest('.footer')) return 'footer';

    return 'unknown';
};

const HeatmapTracker = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const section = getSection(event);
            const data = {
                section: section,
                action: 'mousemove',
                x: event.clientX,
                y: event.clientY
            };
            sendDataToBackend(data);
        };

        const handleClick = (event) => {
            const section = getSection(event);
            const data = {
                section: section,
                action: 'click',
                x: event.clientX,
                y: event.clientY
            };
            sendDataToBackend(data);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const sendDataToBackend = (data) => {
        fetch('http://localhost:5000/api/heatmap/heatmap', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch((error) => console.error('Error sending heatmap data:', error));
    };

    return null; // Este componente no renderiza nada visualmente
};

export default HeatmapTracker;
