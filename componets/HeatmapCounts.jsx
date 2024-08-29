import React, { useEffect, useState } from 'react';

const HeatmapCounts = () => {
    const [counts, setCounts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/heatmap/conteo')
            .then(response => response.json())
            .then(data => setCounts(data))
            .catch(error => console.error('Error fetching heatmap counts:', error));
    }, []);

 
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px'
    };

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '80%',
        maxWidth: '800px'
    };

    const thStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4'
    };

    const tdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center'
    };

    const h2Style = {
        marginBottom: '20px'
    };

    return (
        <div style={containerStyle}>
            <h2 style={h2Style}>Interacciones en la Sección</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Sección</th>
                        <th style={thStyle}>Acción</th>
                        <th style={thStyle}>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    {counts.map((count, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{count._id.section}</td>
                            <td style={tdStyle}>{count._id.action}</td>
                            <td style={tdStyle}>{count.totalCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HeatmapCounts;
