import React from 'react';

const Main = () => {
  return (
    <main className="main" style={mainStyle}>
      {/* Aquí va el contenido principal de tu página */}
    </main>
  );
};

// Agrega un zIndex aquí si es necesario, o ajusta según tu diseño
const mainStyle = {
  marginTop: '60px', // Ajusta este valor según la altura del Header para evitar solapamientos
};

export default Main;