import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Heatmap from './assets/Heatmap.jsx'; 
import HeatmapTracker from './assets/HeatmapTracker.jsx';
import Header from '../componets/Header.jsx';
import Footer from '../componets/footer.jsx';


const rootElement = document.getElementById('root');


createRoot(rootElement).render(
  <StrictMode>
    <Header />
    <HeatmapTracker /> 
    <Heatmap />         
    <Footer /> 
  </StrictMode>,
);
