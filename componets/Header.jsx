import React from "react";

const Header = () => {
  return (
    <header className="header" style={headerStyle}>
      <h1>Antactic Travel</h1>
      <nav>
        <a href="#home">Inicio</a> | 
        <a href="#home">Características</a> | 
        <a href="#home">Contacto</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#bbbbbb',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  zIndex: '0', // Asegúrate de que esté encima de otros elementos
};

export default Header;
