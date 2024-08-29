import React, { useEffect } from 'react';

const getSection = (event) => {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element) return 'main';

    if (element.closest('.header')) return 'header';
    if (element.closest('.main')) return 'main';
    if (element.closest('.footer')) return 'footer';

    return 'main';
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

    return null; 
};

export default HeatmapTracker;