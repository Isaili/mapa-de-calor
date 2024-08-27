import React, { useEffect, useRef, useState } from 'react';

const Heatmap = () => {
    const [heatmapData, setHeatmapData] = useState([]);
    const canvasRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/heatmap/regresar')
            .then(response => response.json())
            .then(data => setHeatmapData(data));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        heatmapData.forEach(point => {
            const intensity = Math.min(point.count / getMaxCount(heatmapData), 1);
            const color = getColor(intensity);
            paintHeatmap(ctx, point.x, point.y, color);
        });
    }, [heatmapData]);

    const getMaxCount = (data) => {
        return data.reduce((max, point) => (point.count > max ? point.count : max), 0);
    };

    const getColor = (intensity) => {
        if (intensity > 0.7) return 'rgba(255, 0, 0, 0.7)'; // Rojo para alta interacción
        if (intensity > 0.4) return 'rgba(255, 255, 0, 0.7)'; // Amarillo para media interacción
        return 'rgba(0, 255, 0, 0.7)'; // Verde para baja interacción
    };

    const paintHeatmap = (ctx, x, y, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 7, 7); // Rectángulo pequeño en la coordenada (x, y)
    };

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        />
    );
};

export default Heatmap;
