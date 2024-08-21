import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Heatmap from './Heatmap.jsx'; // Componente para visualizar el mapa de calor
import HeatmapTracker from './assets/HeatmapTracker.jsx'; // Componente para capturar y enviar datos

// Obtén el elemento raíz del DOM
const rootElement = document.getElementById('root');

// Crear la raíz de React y renderizar la aplicación
createRoot(rootElement).render(
  <StrictMode>
    <HeatmapTracker />  {/* Componente para capturar datos */}
    <Heatmap />         {/* Componente para visualizar el mapa de calor */}
  </StrictMode>,
);
