import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={footerStyle}>
            <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        </footer>
    );
};

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    borderTop: '1px solid #ddd',
    zIndex: '0', // Asegúrate de que esté debajo del Header
};

export default Footer;
